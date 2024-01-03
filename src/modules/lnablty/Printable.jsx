import React from "react";
import {
  Document,
  Page,
  View,
  Text,
} from "@react-pdf/renderer";

import SectionTitle from "../SectionTitle";
import StudentInfo from "../StudentInfo";

function Printable(props) {
  const {
    consultation,
    institute,
    dt,
    answers,
    scores,
  } = props;

  const SectionTitleWithScore = ({ title, score }) => <View style={{ display: "flex", flexDirection: "row" }}>
    <View style={{ flexGrow: 1 }}>
      <SectionTitle>{title}</SectionTitle>
    </View>

    <View>
      <Text style={{ fontSize: 15, color: "rgb(212, 212, 212)" }}><Text>&ensp;</Text><Text style={{ fontSize: 18, fontWeight: "bold", color: "rgb(48, 113, 242)" }}>{score}점</Text> / 25점</Text>
    </View>
  </View>

  const answerDisplay = (answerValue) => {
    switch (answerValue) {
      case 1:
        return "매우 아니다";
      case 2:
        return "아니다";
      case 3:
        return "보통이다";
      case 4:
        return "그렇다";
      case 5:
        return "매우 그렇다";
      default:
        return "";
    }
  };

  const tableHeader = <View style={{ display: 'flex', flexDirection: 'row', fontSize: 9, textAlign: 'center' }}>
    <View style={{ padding: 6, backgroundColor: '#f4f4f4', border: '1px solid #d4d4d4', borderRight: 0, flex: 1 }}>
      <Text style={{ fontWeight: 'bold' }}>세부평가내용</Text>
    </View>

    <View style={{ width: 127.5, padding: 6, backgroundColor: '#f4f4f4', border: '1px solid #d4d4d4' }}>
      <Text style={{ fontWeight: 'bold' }}>답변</Text>
    </View>
  </View>;

  const TableRow = ({ question, answerValue }) => <View style={{ display: 'flex', flexDirection: 'row', fontSize: 11.25 }}>
    <View style={{ padding: 6, borderLeft: '1px solid #d4d4d4', borderBottom: '1px solid #d4d4d4', flex: 1 }}>
      <Text>{question}</Text>
    </View>

    <View style={{ width: 127.5, padding: 6, border: '1px solid #d4d4d4', borderTop: 0, textAlign: 'center' }}>
      <Text>{answerDisplay(answerValue)}</Text>
    </View>
  </View>


  return <Document title={`${consultation.student.name} 님의 학생부 역량 분석 결과`}>
    <Page size="A4" style={{
      padding: 30,
      fontFamily: "Pretendard",
      fontSize: 9,
    }}>
      <Text style={{ fontSize: 21, fontWeight: "bold" }}>학생부 역량 분석: <Text style={{ color: "rgb(12, 112, 232)" }}>학업역량</Text></Text>
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>대학교육을 충실히 이수하는 데 필요한 수학 능력을 분석합니다.</Text>
      <View style={{ height: 15 }} />

      <StudentInfo
        consultation={consultation}
        institute={institute}
        dt={dt}
      />
      <View style={{ height: 30 }} />

      <SectionTitleWithScore title="탐구력" score={scores[0]} />
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>지적 호기심을 바탕으로 사물과 현상에 대해 탐구하고, 문제를 해결하려는 노력을 측정합니다.</Text>
      <View style={{ height: 7.5 }} />
      
      {tableHeader}
      <TableRow question="나는 희망전공이나 관심사와 관련하여 도전적인 과제를 이수하고 있다" answerValue={answers[0]} />
      <TableRow question="나는 새로운 지식이나 분야에 관심을 가지고 자기 주도적으로 학습하려는 노력을 하고 있다" answerValue={answers[1]} />
      <TableRow question="나는 교과에서 이루어지는 탐구활동에 적극적으로 참여하고 있다" answerValue={answers[2]} />
      <TableRow question="나는 사물이나 현상을 보며 호기심이 들 때가 있다" answerValue={answers[3]} />
      <TableRow question="나는 뚜렷한 관심사가 있으며 해당 분야에 관련된 독서를 자주 하는 편이다" answerValue={answers[4]} />
      <View style={{ height: 30 }} />

      <SectionTitleWithScore title="학습 습관" score={scores[1]} />
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>효과적인 학습을 위한 올바른 학습 습관을 체득 정도를 측정합니다.</Text>
      <View style={{ height: 7.5 }} />

      {tableHeader}
      <TableRow question="나는 책상에 앉아 집중을 하는데까지 시간이 오래 걸리지 않는다" answerValue={answers[5]} />
      <TableRow question="나는 집중력을 유지하지 위한 나만의 노하우가 있다" answerValue={answers[6]} />
      <TableRow question="나는 숙제를 밀리지 않고 잘 하는 편이다" answerValue={answers[7]} />
      <TableRow question="나는 다른 학생들에 비해 성적이 높은 편이다" answerValue={answers[8]} />
      <TableRow question="나는 학업계획을 세워 공부하며, 계획을 잘 지키는 편이다" answerValue={answers[9]} />
      <View style={{ height: 30 }} />

      <SectionTitleWithScore title="학습 태도" score={scores[2]} />
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>학업을 수행하고 학습해 나가려는 의지와 노력의 정도를 측정합니다.</Text>
      <View style={{ height: 7.5 }} />
    </Page>

    <Page size="A4" style={{
      padding: 30,
      fontFamily: "Pretendard",
      fontSize: 9,
    }}>
      {tableHeader}
      <TableRow question="나의 성적은 꾸준하거나 상승하고 있다" answerValue={answers[10]} />
      <TableRow question="나의 성적은 유난히 소홀한 과목 없이 꾸준하다" answerValue={answers[11]} />
      <TableRow question="나는 스트레스가 심한 상황에도 학업을 이어갈 수 있다" answerValue={answers[12]} />
      <TableRow question="나는 내가 열심히 공부해야하는 이유를 명확하게 알고 있다" answerValue={answers[13]} />
      <TableRow question="나는 나의 학습을 방해하는 요소가 무엇인지 잘 알고 있으며, 그런 요소를 피하려고 노력한다" answerValue={answers[14]} />
      <View style={{ height: 45 }} />
      
      <Text style={{ fontSize: 21, fontWeight: "bold" }}>학생부 역량 분석: <Text style={{ color: "rgb(12, 112, 232)" }}>진로역량</Text></Text>
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>자신의 진로와 전공(계열)에 관한 탐색 노력과 준비 정도를 분석합니다.</Text>
      <View style={{ height: 15 }} />

      <SectionTitleWithScore title="전공 관련 교과목 이수 및 성취도" score={scores[3]} />
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>고교 교육과정에서 전공에 필요한 과목을 선택하여 이수한 정도를 측정합니다.</Text>
      <View style={{ height: 7.5 }} />

      {tableHeader}
      <TableRow question="나는 지원 전공과 관련된 과목을 이수하고 있다" answerValue={answers[15]} />
      <TableRow question="나는 과목을 선택할 때 진로를 고려하여 자발적으로 선택했다" answerValue={answers[16]} />
      <TableRow question="나는 스스로의 흥미와 관심을 발견하기 위한 활동을 지속하고 있다" answerValue={answers[17]} />
      <TableRow question="나는 과목간 체계를 명확하게 이해하고 있으며 선수과목부터 차근차근 수강하고 있다" answerValue={answers[18]} />
      <TableRow question="나는 진로와 관련된 과목을 수강하기 위해 온라인수업, 소인수과목 등 추가적이 노력을 하고 있다" answerValue={answers[19]} />
      <View style={{ height: 30 }} />

      <SectionTitleWithScore title="전공에 대한 관심과 이해" score={scores[4]} />
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>고교 교육과정에서 전공에 필요한 과목을 수강하고 취득한 학업 성취 수준을 측정합니다.</Text>
      <View style={{ height: 7.5 }} />

      {tableHeader}
      <TableRow question="나는 미래에 되고 싶은 직업이 명확하게 있다" answerValue={answers[20]} />
      <TableRow question="나는 진학하고 싶은 학과/계열이 명확하게 있다" answerValue={answers[21]} />
      <TableRow question="나는 학교생활의 경험과 대학 진학 동기를 연관지어 설명할 수 있다" answerValue={answers[22]} />
      <TableRow question="나는 지원 전공과 관련된 창의적 체험활동(자율,동아리,봉사,진로)에 꾸준히 참여하고 있다" answerValue={answers[23]} />
      <TableRow question="나는 지원전공을 고려하여 교과활동(세부능력 및 특기사항)에 참여하고 있다" answerValue={answers[24]} />
    </Page>

    <Page size="A4" style={{
      padding: 30,
      fontFamily: "Pretendard",
      fontSize: 9,
    }}>
      <SectionTitleWithScore title="자기주도성" score={scores[5]} />
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>자신의 진로를 탐색하는 과정에서 이루어진 활동이나 경험 및 노력 정도를 측정합니다.</Text>
      <View style={{ height: 7.5 }} />

      {tableHeader}
      <TableRow question="나는 특정한 분야에 열정을 가지고 깊이 탐구하는 활동을 하고 있다" answerValue={answers[25]} />
      <TableRow question="나는 진로를 진지하게 탐색하고 있으며, 진로를 설정하거나 변경한 분명한 이유가 있다" answerValue={answers[26]} />
      <TableRow question="나는 4차산업혁명 등 직업 세계의 변화나 미래 트렌드에 관심을 가지고 있다" answerValue={answers[27]} />
      <TableRow question="나는 나의 목표를 달성하기까지 꾸준히 노력할 것이며, 결국은 달성할 것이다" answerValue={answers[28]} />
      <TableRow question="나는 예체능 영역에도 적극적이고 성실하게 참여하며 다양한 경험을 쌓고 있다" answerValue={answers[29]} />
      <View style={{ height: 45 }} />
      
      <Text style={{ fontSize: 21, fontWeight: "bold" }}>학생부 역량 분석: <Text style={{ color: "rgb(12, 112, 232)" }}>진로역량</Text></Text>
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>공동체의 일원으로서 갖춰야 할 바람직한 사고와 행동을 분석합니다.</Text>
      <View style={{ height: 15 }} />

      <SectionTitleWithScore title="협업 능력" score={scores[6]} />
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>공동체의 목표를 달성하기 위해 협력하며, 구성원들과 합리적인 의사 소통을 할 수 있는 능력을 측정합니다.</Text>
      <View style={{ height: 7.5 }} />

      {tableHeader}
      <TableRow question="나는 학교생활의 다양한 영역에서 주도적으로 역할을 수행한 경험이 있다" answerValue={answers[30]} />
      <TableRow question="나는 공동체 안에서 목표 달성을 위해 함께 노력한 경험이 있다" answerValue={answers[31]} />
      <TableRow question="나는 갈등 상황에서 화합과 단결을 이끌어 내기 위해 노력한 경험이 있다" answerValue={answers[32]} />
      <TableRow question="나는 나와 다른 생각을 가진 사람과 대화할 때 기분이 나쁘지 않다" answerValue={answers[33]} />
      <TableRow question="나는 내 생각을 명확하고 효과적으로 전달할 수 있다" answerValue={answers[34]} />
      <View style={{ height: 30 }} />
    </Page>

    <Page size="A4" style={{
      padding: 30,
      fontFamily: "Pretendard",
      fontSize: 9,
    }}>
      <SectionTitleWithScore title="인성" score={scores[7]} />
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>공동체의 목표를 달성하기 위해 협력하며, 구성원들과 합리적인 의사 소통을 할 수 있는 능력을 측정합니다.</Text>
      <View style={{ height: 7.5 }} />

      {tableHeader}
      <TableRow question="나는 학교 생활 가운데 나타나는 문제점을 해결하기 위해 적극적으로 노력한 경험이 있다" answerValue={answers[35]} />
      <TableRow question="나는 책임감을 가지고 나의 의무를 다하기 위해 노력하는 편이다" answerValue={answers[36]} />
      <TableRow question="나는 나에게 불리한 경우라도 원칙을 키기위해 노력한다" answerValue={answers[37]} />
      <TableRow question="나는 나의 잘못을 인정하고 개선하려는 노력을 기울이고 있다" answerValue={answers[38]} />
      <TableRow question="나는 내가 지금 공부하는 환경에 대해 감사하는 마음을 가지고 있다" answerValue={answers[39]} />
      <View style={{ height: 52.5 }} />

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
        <View>
          <Text style={{ fontSize: 21, fontWeight: "bold" }}>학생부 역량 분석 총 점수<Text style={{ fontSize: 12.75, color: "rgb(212, 212, 212)" }}> (200점)</Text></Text>
        </View>

        <View style={{ flexGrow: 1 }} />

        <View style={{ padding: "7.5px 11.25px", backgroundColor: "rgba(12, 112, 232, 0.1)" }}>
          <Text style={{ fontSize: 21, fontWeight: "bold", color: "rgb(12, 112, 232)" }}>{scores.reduce((acc, val) => (acc + val), 0)}점</Text>
        </View>
      </View>
    </Page>
  </Document>;
}

export default Printable;
