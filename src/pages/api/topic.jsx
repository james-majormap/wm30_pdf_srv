import { Font, renderToStream } from '@react-pdf/renderer';
import { keysToCamel } from '../../modules/utils';
import Printable from '../../modules/topic/Printable';
import sampleData from '../../data/advr_sample.json';


export default async function handler(req, res) {
  // const state = JSON.parse(req.query.data);
  const state = keysToCamel(sampleData);

  Font.register({
    family: 'Pretendard',
    fonts: [
      { src: './public/assets/fonts/Pretendard-Regular.otf' },
      { src: './public/assets/fonts/Pretendard-Bold.otf', fontWeight: 'bold' },
    ],
  })
  
  const doc = <Printable topicResearch={state} />;
  const stream = await renderToStream(doc);
  stream.pipe(res);
  stream.on('end', () => res.end());
}
