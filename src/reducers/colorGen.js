const colorGen = (state = "#ffffff", action) => {
  const randomHexColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  switch (action.type) {
    case "RANDOM_COLOR":
      return (state = randomHexColor());
    default:
      return state;
  }
};

export default colorGen;
