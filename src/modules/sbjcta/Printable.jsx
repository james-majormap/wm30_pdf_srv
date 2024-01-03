import React from "react";
import {
  Document,
  Page,
  View,
  Text,
} from "@react-pdf/renderer";

import Card from "../Card";
import SectionTitle from "../SectionTitle";
import StudentInfo from "../StudentInfo";

const Subtitlte1 = ({ children }) => <Text style={{ fontSize: 12.75, fontWeight: "bold" }}>{children}</Text>;
const Subtitlte2 = ({ children }) => <Text style={{ fontSize: 10.5, fontWeight: "bold" }}>{children}</Text>;
const Body1 = ({ children }) => <Text style={{ fontSize: 12 }}>{children}</Text>;

function Printable(props) {
  const {
    consultation,
    institute,
    dt,
    subjectActivity,
  } = props;

  return <Document title={`${consultation.student.name} 님의 주제탐구보고서`}>
    <Page size="A4" style={{
      padding: 30,
      fontFamily: "Pretendard",
      fontSize: 9,
    }}>
      <SectionTitle>주제탐구보고서</SectionTitle>
      <View style={{ height: 15 }} />

      <StudentInfo
        consultation={consultation}
        institute={institute}
        dt={dt}
      />
      <View style={{ height: 30 }} />

      <View wrap={false}>
        <Subtitlte1>희망 진로</Subtitlte1>
        <View style={{ height: 7.5 }} />

        <Card>
          <Subtitlte2>관심 직업</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.interestedJobName}</Body1>
          <View style={{ height: 11.25 }} />

          <Subtitlte2>관심 학과</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.interestedMajorName}</Body1>
        </Card>  
      </View>
      <View style={{ height: 30 }} />

      <View wrap={false}>
        <Subtitlte1>직업 분석</Subtitlte1>
        <View style={{ height: 7.5 }} />

        <Card>
          <Subtitlte2>핵심 역량</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.interestedJobAbilities}</Body1>
        </Card>
      </View>
      <View style={{ height: 30 }} />

      {/* <View wrap={false}>
        <Subtitlte1>학과 분석</Subtitlte1>석
        <View style={{ height: 7.5 }} />

        <Card>
          <Subtitlte2>평가 요소</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.interestedMajorEvaluation}</Body1>
          <View style={{ height: 11.25 }} />

          <Subtitlte2>핵심 역량</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.interestedMajorAbilities}</Body1>
        </Card>
      </View>
      <View style={{ height: 30 }} /> */}

      <View wrap={false}>
        <Subtitlte1>동기 및 계획</Subtitlte1>
        <View style={{ height: 7.5 }} />

        <Card>
          <Subtitlte2>탐구 주제</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.activityTitle}</Body1>
          <View style={{ height: 11.25 }} />

          <Subtitlte2>주제 선정 이유 (동기)</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.activityReason}</Body1>
          <View style={{ height: 11.25 }} />
        
          <Subtitlte2>탐구 과목 · 관련 단원</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{`${subjectActivity.subjectName}${subjectActivity.subjectChapter ? ` ${subjectActivity.subjectChapter}` : ""}`}</Body1>
          <View style={{ height: 11.25 }} />

          <Subtitlte2>융합 과목 · 관련 단원</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.fusedSubjectName ? `${subjectActivity.fusedSubjectName}${subjectActivity.fusedSubjectChapter ? ` ${subjectActivity.fusedSubjectChapter}` : ""}` : "작성된 내용이 없습니다"}</Body1>
          <View style={{ height: 11.25 }} />

          <Subtitlte2>탐구 목표 (가설)</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.activityObjective || "작성된 내용이 없습니다"}</Body1>
        </Card>
      </View>
      <View style={{ height: 30 }} />

      <View wrap={false}>
        <Subtitlte1>과정 및 실행</Subtitlte1>
        <View style={{ height: 7.5 }} />

        <Card>
          <Subtitlte2>탐구 기간</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.activityStart ? `${subjectActivity.activityStart} ~ ${subjectActivity.activityEnd}` : "작성된 내용이 없습니다"}</Body1>
          <View style={{ height: 11.25 }} />

          <Subtitlte2>보여줄 역량</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.activityAbilities.join(', ') || "작성된 내용이 없습니다"}</Body1>
          <View style={{ height: 11.25 }} />

          <Subtitlte2>탐구 방법</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.activityMethods.join(', ') || "작성된 내용이 없습니다"}</Body1>
          <View style={{ height: 11.25 }} />

          <Subtitlte2>단원 기초 내용</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.chapterContent || "작성된 내용이 없습니다"}</Body1>
          <View style={{ height: 11.25 }} />

          <Subtitlte2>연계 탐구 내용 (알고 싶었던 내용)</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.activityContent || "작성된 내용이 없습니다"}</Body1>
        </Card>
      </View>
      <View style={{ height: 30 }} />

      <View wrap={false}>
        <Subtitlte1>결과</Subtitlte1>
        <View style={{ height: 7.5 }} />

        <Card>
          <Subtitlte2>탐구 내용 종합</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.conclusion || "작성된 내용이 없습니다"}</Body1>
          <View style={{ height: 11.25 }} />

          <Subtitlte2>배우고 느낀 점</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.impression || "작성된 내용이 없습니다"}</Body1>
        </Card>
      </View>
      <View style={{ height: 30 }} />

      <View wrap={false}>
        <Subtitlte1>후속활동</Subtitlte1>
        <View style={{ height: 7.5 }} />

        <Card>
          <Subtitlte2>연계 심화 탐구 및 실천(변화) 계획</Subtitlte2>
          <View style={{ height: 7.5 }} />

          <Body1>{subjectActivity.plan || "작성된 내용이 없습니다"}</Body1>
        </Card>
      </View>
    </Page>
  </Document>;
}

export default Printable;
