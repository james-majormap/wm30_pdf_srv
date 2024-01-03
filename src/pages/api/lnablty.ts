// import React from "react";

// import queryString from "query-string";

// import apiClient from "../../../../client";
// import PDFProvider from "../../../../components/PDFProvider";
// import Printable from "./components/Printable";

// function MajorSearchReportPdfPage () {
//   const { consultationId, preview, autoDownload, id_token } = queryString.parse(window.location.search);
//   const [state, setState] = React.useState(null);

//   const performLoad = React.useCallback(async () => {
//     const res = await apiClient.get(`/api/consultations/${consultationId}/assessments/learning-ability`, {
//       headers: {
//         Authorization: `Bearer ${id_token || ""}`,
//       },
//     });

//     const consultationRes = await apiClient.get(`/api/consultations/${consultationId}`, {
//       headers: {
//         Authorization: `Bearer ${id_token || ""}`,
//       },
//     });
//     const consultation = consultationRes.data;
//     const dt = new Date(consultation.learningAbilityAssessmentDone);

//     const instituteRes = await apiClient.get(`/api/admin/institutes/${consultation.instituteId}`, {
//       headers: {
//         Authorization: `Bearer ${id_token || ""}`,
//       },
//     });
//     const institute = instituteRes.data;

//     setState({
//       consultation: { ...consultation },
//       institute: { ...institute },
//       dt: [
//         dt.getFullYear(),
//         dt.getMonth() + 1 < 10 ? `0${dt.getMonth() + 1}` : dt.getMonth() + 1,
//         dt.getDate() < 10 ? `0${dt.getDate()}` : dt.getDate(),
//       ].join('-'),
      
//       ...res.data,
//     });
//   }, [consultationId]);

//   React.useEffect(() => {
//     performLoad();
//   }, [performLoad]);

//   if (!state) {
//     return <>PDF 문서를 생성 중입니다...</>;
//   }

//   const doc = <Printable { ...state } />;
//   return <PDFProvider
//     document={doc}
//     fileName={`${state.consultation.student.name}님의_학생부_역량_분석_결과.pdf`}
//     preview={preview}
//     disableAutoDownload={!autoDownload}
//   />;
// }

// export default MajorSearchReportPdfPage;
