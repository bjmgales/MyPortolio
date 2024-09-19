import { useEffect } from "react";
export default function MyDocuments(props) {
  useEffect(() => {
    if (!props.changePage.change) {
      return;
    }
    document.querySelector('.doc').classList.add('visible');
    document.querySelector('.docContainer').classList.add('visible');
  }, [props.changePage.change]);
  useEffect(() => {
    if (props.changePage.change) return;
    document.querySelector('.doc').classList.remove('visible');
    document.querySelector('.docContainer').classList.remove('visible');
    const t = setTimeout(() => {
      props.setHideHome(false);
      props.setChangePage(prev => ({
        ...prev,
        change: false
      }));
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  }, [props.changePage.change]);
  return /*#__PURE__*/React.createElement("div", {
    className: "docContainer"
  }, /*#__PURE__*/React.createElement("object", {
    className: "doc",
    data: props.changePage.name + '#toolbar=0&view=FitH',
    type: "application/pdf"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pdfErrMsg"
  }, "Unfortunately, you can't display pdf in your navigator. But you can still download it ", /*#__PURE__*/React.createElement("a", {
    href: props.changePage.name
  }, "here!"))));
}