const quizzicalData = {};

const useLocalStorage = (dataObject) => {
  Object.assign(quizzicalData, dataObject);

  localStorage.setItem("quizzicalData", JSON.stringify(quizzicalData));
};

export default useLocalStorage;
