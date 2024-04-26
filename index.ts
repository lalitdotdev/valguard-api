import { Hono } from 'hono';
import { Index } from '@upstash/vector';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { cors } from 'hono/cors';
import { env } from 'hono/adapter';

//  Recursive text splitter
const semanticSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 25,
  separators: [' '],
  chunkOverlap: 8,
});

// there is bias in the underlying open-source embedding models
// so these are flagged inappropriately
const WHITELIST = ['black', 'swear', 'she']; // flagged inappropriately

const PROFANITY_THRESHOLD = 0.86;
const VERY_PROFANITY_THRESHOLD = 0.95; // New threshold for very profanity

type Environment = {
  VECTOR_URL: string;
  VECTOR_TOKEN: string;
};

const app = new Hono();

app.use(cors());

// let c is context of the request

app.post('/', async (c) => {
  if (c.req.header('Content-Type') !== 'application/json') {
    return c.json({ error: 'JSON body expected.' }, { status: 406 });
  }
});

function splitTextIntoWords(text: string): string[] {
  return text.split(/\s/);
}

async function splitTextIntoSemantics(text: string): Promise<string[]> {
  if (text.split(/\s/).length === 1) return []; // no semantics for single words
  const documents = await semanticSplitter.createDocuments([text]);
  const chunks = documents.map((chunk) => chunk.pageContent);
  return chunks;
}

export default app;
