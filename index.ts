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

const app = new Hono();

app.use(cors());
