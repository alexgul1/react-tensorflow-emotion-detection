const removePreloadLogic = () => {
  const elements = [
    document.querySelector('#pre-render--html'),
    document.querySelector('#pre-render--styles'),
  ];
  elements.forEach((el) => el && el.remove());
};

export default removePreloadLogic;
