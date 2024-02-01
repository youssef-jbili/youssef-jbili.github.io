window.addEventListener("load", function () {
  console.log("I'm loaded correctly!");
  setTimeout(() => {
    throw new Error("Help! I am under the water");
  }, 2000);
});
