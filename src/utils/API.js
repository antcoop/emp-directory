// This code is meant to serve as a mock fetch from an API.
export const getDeveloper = new Promise(function(resolve) {
  setTimeout(() => {
    resolve({
      excitementLevel: 10000,
      lifeLongLearner: true,
      mood: "tired",
      name: "Anthony"
    });
  }, 3000);
});
