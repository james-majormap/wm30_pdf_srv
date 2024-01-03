import { Font, renderToStream } from '@react-pdf/renderer';
import { keysToCamel } from '../../modules/utils';
import Printable from '../../modules/sbjcta/Printable';
import sampleData from '../../data/sbjcta_sample.json';


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
  
  const doc = <Printable
    consultation={state.consultation}
    student={state.consultation.student}
    institute={state.consultation.student.institute}
    dt={state.created.split('T')[0]}
    subjectActivity={state}
  />;

  const stream = await renderToStream(doc);
  stream.pipe(res);
  stream.on('end', () => res.end());
}
