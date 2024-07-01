// (function(global, factory) {
//     if (typeof module === "object" && typeof module.exports === "object") {
//       // Node/CommonJS
//       module.exports = factory();
//     } else if (typeof define === "function" && define.amd) {
//       // AMD
//       define(factory);
//     } else {
//       // Browser globals
//       global.contactForm = factory();
//     }
//   })(typeof window !== "undefined" ? window : this, function() {
//     const contactForm = {
//       submit: function(formId) {
//         const form = document.getElementById(formId);
//         const formData = new FormData(form);
//         const data = {};
//         formData.forEach((value, key) => {
//           data[key] = value;
//         });
//         console.log("Form data:", data);
//         alert("Form submitted! Check console for data.");
//       }
//     };

//     return contactForm;
//   });

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
    showModal: function () {
      if (typeof document !== "undefined") {
        // Define the modal HTML structure
        const modalHTML = `
          <div id="modal">
            <style>
              /* Define your CSS styles here */
              #modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
              }

              #modalContent {
                background-color: white;
                padding: 20px;
                border-radius: 5px;
              }
            </style>
            <div id="modalContent">
              <form id="myModalForm">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>
                <button type="button" id="submitBtn">Submit</button>
                <button type="button" id="closeBtn">Close</button>
              </form>
            </div>
          </div>
        `;

        // Append the modal HTML to the body
        const modalContainer = document.createElement("div");
        modalContainer.innerHTML = modalHTML;
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
