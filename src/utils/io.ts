import path from 'path';
import { promises as fs } from 'fs';

export default function writeData(data: string, filename: string) {
  const storagePath = path.join(process.cwd(), 'dist', filename);
  return fs.writeFile(storagePath, data);
}
