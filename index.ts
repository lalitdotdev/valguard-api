import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

//  Recursive text splitter
const semanticSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 25,
  separators: [' '],
  chunkOverlap: 8,
});
