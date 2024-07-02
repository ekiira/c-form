import "../style.css";
import template from "../index.html";

(function (global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    // Node/CommonJS
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    // AMD
    define(factory);
  } else {
    // Browser globals
    global.modalForm = factory();
  }
})(typeof window !== "undefined" ? window : this, function () {
  const modalForm = {
    showModal: function (reference) {
      if (typeof document !== "undefined") {
        // Append the modal HTML to the body
        const modalContainer = document.createElement("div");
        modalContainer.innerHTML = template;
        document.body.appendChild(modalContainer);
        // Event listeners for modal actions
        document
          .getElementById("submitBtn")
          .addEventListener("click", function () {
            const formData = new FormData(
              document.getElementById("myModalForm")
            );
            const data = {};
            formData.forEach((value, key) => {
              data[key] = value;
              data["reference"] = reference;
            });
            console.log("Form data:", data);
            alert("Form submitted! Check console for data.");
            document.body.removeChild(modalContainer);
          });

        document
          .getElementById("closeBtn")
          .addEventListener("click", function () {
            document.body.removeChild(modalContainer);
          });
      } else {
        console.error(
          "This function can only be used in a browser environment."
        );
      }
    },
  };

  return modalForm;
});
