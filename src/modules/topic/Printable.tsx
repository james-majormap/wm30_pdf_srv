import React from "react";
import {
  Document,
  Page,
  View,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";

import Card from "../Card";
import SectionTitle from "../SectionTitle";
import StudentInfo from "../StudentInfo";

interface ITopicResearch {
  id: number;
  created: string;
  updated: string;
  consultation_id: number;
  consultation: {
    student: {
      id: number;
      name: string;
      type: string;
      institute: {
        id: number;
        name: string;
        type: string;
        area: string;
      };
      schoolName: string;
      schoolGrade: number;
      schoolClass: number;
      schoolClassNum: number;
    };
    roadmapTopicResearchesDone: boolean;
    year: number;
    term: number;
    schoolGrade: number;
    schoolClass: number;
    schoolClassNum: number;
  };
  interestedJobName: string;
  interestedMajorName: string;
  activityTitle: string;
  activityReason: string;
  activityMethods: string[];
  activityContent: string;
  subjectName: string;
  subjectChapter: string;
  selectionProcess: string;
  keywordSelections: {
    id: number;
    keywordText: string;
    comment: string;
  }[];
  academicRefItems: {
    bookmarkId: number | null;
    title: string;
    description: string;
    link: string;
    keywords: string[];
  }[];
  conclusion: string;
  impression: string;
  plan: string;
  selfEvaluation: string;
}

interface IPrintableProps {
  topicResearch: ITopicResearch;
}


const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Pretendard",
    fontSize: 9,
  },
  subtitle1: {
    fontSize: 12.75,
    fontWeight: "bold",
  },
  subtitle2: {
    fontSize: 10.5,
    fontWeight: "bold",
  },
  body1: {
    fontSize: 12,
  },
  chipContainer: {
    display: "flex",
    flexDirection: "row",
  },
  chip: {
    padding: "3px 5.25px",
    backgroundColor: "rgba(48, 113, 242, 0.1)",
    borderRadius: 2.5,
  },
  chipText: {
    color: "rgb(48, 113, 242)",
    fontSize: 9.25,
    fontWeight: "bold",
  }
});

function Printable(props: IPrintableProps) {
  const { topicResearch } = props;
  const {
    consultation,
    keywordSelections,
    academicRefItems,
  } = topicResearch;
  const { institute } = consultation.student;

  const dt = React.useMemo(() => {
    const created = new Date(topicResearch.created);
    const year = created.getFullYear();
    const month = created.getMonth() + 1;
    const date = created.getDate();

    return [
      year,
      month < 10 ? `0${month}` : month,
      date < 10 ? `0${date}` : date,
    ].join("-");
  }, [topicResearch.created]);

  return <Document title={`${consultation.student.name} 님의 주제탐구보고서`}>
    <Page size="A4" style={styles.page}>
      <SectionTitle>주제탐구보고서</SectionTitle>
      <View style={{ height: 15 }} />

      <StudentInfo
        consultation={consultation}
        institute={institute}
        dt={dt}
      />
      <View style={{ height: 30 }} />

      <View wrap={false}>
        <Text style={styles.subtitle1}>희망 진로</Text>
        <View style={{ height: 7.5 }} />

        <Card style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.subtitle2}>희망직업</Text>
            <View style={{ height: 7.5 }} />

            <Text style={styles.body1}>{topicResearch.interestedJobName}</Text>
          </View>
          <View style={{ width: 11.25 }} />

          <View style={{ flex: 1 }}>
            <Text style={styles.subtitle2}>희망학과</Text>
            <View style={{ height: 7.5 }} />

            <Text style={styles.body1}>{topicResearch.interestedMajorName}</Text>
          </View>
        </Card>
      </View>
      <View style={{ height: 30 }} />

      <View wrap={false}>
        <Text style={styles.subtitle1}>미래트렌드</Text>
        <View style={{ height: 7.5 }} />

        <Card>
          <Text style={styles.body1}>{topicResearch.selectionProcess}</Text>
        </Card>
      </View>
      <View style={{ height: 30 }} />

      <View wrap={false}>
        <Text style={styles.subtitle1}>키워드 선택</Text>
        <View style={{ height: 7.5 }} />

        <Card>
          {keywordSelections.map((item, idx) => <View wrap={false} key={`tr-ks-${idx}`}>
            <Text style={styles.subtitle2}>{item.keywordText}</Text>
            {item.comment.length > 0 && <>
              <View style={{ height: 7.5 }} />
            
              <Text style={styles.body1}>{item.comment}</Text>
            </>}
            {idx < keywordSelections.length - 1 && <View style={{ height: 11.25 }} />}
          </View>)}
        </Card>
      </View>
      <View style={{ height: 30 }} />

      <View wrap={false}>
        <Text style={styles.subtitle1}>학술자료 탐색</Text>
        <View style={{ height: 7.5 }} />

        <Card>
          {academicRefItems.map((item, idx) => <View wrap={false} key={`tr-ari-${idx}`}>
            <Text style={styles.body1}>{item.title.replace(/(<([^>]+)>)/ig, "")}</Text>
            <View style={{ height: 5 }} />

            <View style={styles.chipContainer}>
              {item.keywords.map((keyword, jdx) => <React.Fragment
                key={`tr-ari-${idx}-kw-${jdx}`}
              >
                <View style={styles.chip}>
                  <Text style={styles.chipText}>#{keyword}</Text>
                </View>
                {jdx < item.keywords.length - 1 && <View style={{ width: 5 }} />}
              </React.Fragment>)}
            </View>

            {idx < academicRefItems.length - 1 && <View style={{ height: 11.25 }} />}
          </View>)}
        </Card>
      </View>
      <View style={{ height: 30 }} />

      <View wrap={false}>
        <Text style={styles.subtitle1}>동기 및 계획</Text>
        <View style={{ height: 7.5 }} />
          
        <Card>
          <Text style={styles.subtitle1}>나만의 주제</Text>
          <View style={{ height: 7.5 }} />

          <Text style={styles.body1}>{topicResearch.activityTitle}</Text>
          <View style={{ height: 11.25 }} />

          <Text style={styles.subtitle1}>연구동기</Text>
          <View style={{ height: 7.5 }} />

          <Text style={styles.body1}>{topicResearch.activityReason}</Text>
          <View style={{ height: 11.25 }} />

          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.subtitle1}>관련 교과</Text>
              <View style={{ height: 7.5 }} />

              <Text style={styles.body1}>{topicResearch.subjectName}</Text>
            </View>
            <View style={{ width: 11.25 }} />

            <View style={{ flex: 1 }}>
              <Text style={styles.subtitle1}>단원명</Text>
              <View style={{ height: 7.5 }} />

              <Text style={styles.body1}>{topicResearch.subjectChapter}</Text>
            </View>
          </View>
          <View style={{ height: 11.25 }} />

          <Text style={styles.subtitle1}>활동 방법</Text>
          <View style={{ height: 7.5 }} />
          
          <Text style={styles.body1}>{topicResearch.activityMethods.join(', ')}</Text>
        </Card>
      </View>
      <View style={{ height: 30 }} />

      <View>
        <Text style={styles.subtitle1}>결과</Text>
        <View style={{ height: 7.5 }} />

        <Card>
          <Text style={styles.subtitle1}>탐구내용 및 결과</Text>
          <View style={{ height: 7.5 }} />

          <Text style={styles.body1}>{topicResearch.activityContent.replace(/\r/gi, "").replace(/\uFFFE/gi, " ")}</Text>
          <View style={{ height: 11.25 }} />

          <Text style={styles.subtitle1}>배우고 느낀 점</Text>
          <View style={{ height: 7.5 }} />

          <Text style={styles.body1}>{topicResearch.impression.replace(/\r/gi, "").replace(/\uFFFE/gi, " ")}</Text>
        </Card>
      </View>
      <View style={{ height: 30 }} />
      
      <View wrap={false}>
        <Text style={styles.subtitle1}>후속연구계획</Text>
        <View style={{ height: 7.5 }} />

        <Card>
          <Text style={styles.body1}>{topicResearch.plan.replace(/\r/gi, "").replace(/\uFFFE/gi, " ")}</Text>
        </Card>
      </View>
      <View style={{ height: 30 }} />
      
      <View>
        <Text style={styles.subtitle1}>자기평가서</Text>
        <View style={{ height: 7.5 }} />

        <Card>
          <Text style={styles.body1}>{topicResearch.selfEvaluation.replace(/\r/gi, "").replace(/\uFFFE/gi, "")}</Text>
        </Card>
      </View>
    </Page>
  </Document>;
}

export default Printable;
