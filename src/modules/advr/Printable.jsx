import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";

import Card from "../Card";
import SectionTitle from "../SectionTitle";
import StudentInfo from "../StudentInfo";

// const Subtitlte1 = ({ children }) => <Text style={{ fontSize: 12.75, fontWeight: "bold" }}>{children}</Text>;
const Subtitlte2 = ({ children }) => <Text style={{ fontSize: 10.5, fontWeight: "bold" }}>{children}</Text>;
const Body1 = ({ children }) => <Text style={{ fontSize: 12 }}>{children}</Text>;

function Printable(props) {
  const {
    consultation,
    institute,
    dt,
    advancedResearch,
  } = props;

  return <Document title={`${consultation.student.name} 님의 심화연구주제 설계서`}>
    <Page size="A4" style={{
      padding: 30,
      fontFamily: "Pretendard",
      fontSize: 9,
    }}>
      <SectionTitle>심화연구주제 설계서</SectionTitle>
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>자기주도적 탐구활동을 즐기는 학생은 학생부종합전형에서 선발하고자 하는 인재상입니다. 앞에서 구축한 나의 브랜드를 강화할 수 있는 심화연구주제를 탐색하고 선정해보세요.</Text>
      <View style={{ height: 15 }} />

      <StudentInfo
        consultation={consultation}
        institute={institute}
        dt={dt}
      />
      <View style={{ height: 30 }} />

      <SectionTitle>{advancedResearch.title}</SectionTitle>
      <View style={{ height: 15 }} />

      <Card wrap={true}>
        <Subtitlte2>관련 과목 및 단원</Subtitlte2>
        <View style={{ height: 7.5 }} />

        <Body1>{advancedResearch.relatedSubjectName ? `${advancedResearch.relatedSubjectName}${advancedResearch.relatedSubjectChapter ? ` ${advancedResearch.relatedSubjectChapter}` : ''}` : "작성된 내용이 없습니다"}</Body1>
      </Card>
      <View style={{ height: 30 }} />

      <Card>
        <Subtitlte2>주제 선정 이유</Subtitlte2>
        <View style={{ height: 7.5 }} />

        <Body1>{advancedResearch.reason || "작성된 내용이 없습니다"}</Body1>
      </Card>
      <View style={{ height: 30 }} />

      <Card>
        <Subtitlte2>핵심 개념 및 원리, 키워드 등</Subtitlte2>
        <View style={{ height: 7.5 }} />

        {advancedResearch.attachments.map((attachment, idx) => <React.Fragment key={`advanced-research-report-attachment-${idx}`}>
          <Image src={attachment} />
          <View style={{ height: 7.5 }} />
        </React.Fragment>)}

        <Body1>{advancedResearch.conceptKeywords || "작성된 내용이 없습니다"}</Body1>
      </Card>
      <View style={{ height: 30 }} />

      <Card>
        <Subtitlte2>연구 목표</Subtitlte2>
        <View style={{ height: 7.5 }} />

        <Body1>{advancedResearch.impact || "작성된 내용이 없습니다"}</Body1>
      </Card>
      <View style={{ height: 30 }} />

      <Card>
        <Subtitlte2>느낀점</Subtitlte2>
        <View style={{ height: 7.5 }} />

        <Body1>{advancedResearch.comment || "작성된 내용이 없습니다"}</Body1>
      </Card>
    </Page>
  </Document>;
}

export default Printable;
