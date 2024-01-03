import { Font, renderToStream } from '@react-pdf/renderer';
import { keysToCamel } from '../../modules/utils';
import Printable from '../../modules/sbjcts/Printable';
import sampleData from '../../data/sbjcts_sample.json';


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
    consultation={state.results[0].consultation}
    student={state.results[0].consultation.student}
    institute={state.results[0].consultation.student.institute}
    dt={state.results[0].consultation.roadmapSubjectSelectionDone.split('T')[0]}
    subjects={state.results}
  />;

  const stream = await renderToStream(doc);
  stream.pipe(res);
  stream.on('end', () => res.end());
}
