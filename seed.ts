import 'dotenv/config';

import { Transform } from 'stream';

function createLineRangeStream(startLine: number, endLine: number) {
  let currentLine = 0;
  return new Transform({
    transform(chunk, _, callback) {
      if (currentLine >= startLine && currentLine < endLine) {
        this.push(chunk);
      }
      currentLine++;
      if (currentLine >= endLine) {
        this.push(null);
      }
      callback();
    },
    objectMode: true,
  });
}
