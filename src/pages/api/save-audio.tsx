// pages/api/save-audio.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const busboy = require('busboy');
    const bb = busboy({ headers: req.headers });

    let fileWritePromise: Promise<void> | null = null;

    bb.on('file', (name, file, info) => {
      const filename = info.filename;
      const filePath = path.join(process.cwd(), 'public', 'uploads', filename);
      const writeStream = fs.createWriteStream(filePath);
      file.pipe(writeStream);

      fileWritePromise = new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
      });
    });

    bb.on('close', async () => {
      if (fileWritePromise) {
        await fileWritePromise;
      }
      res.status(200).json({ message: 'File uploaded successfully' });
    });

    const readableReq = new Readable().wrap(req);
    readableReq.pipe(bb);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}