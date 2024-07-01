(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
      // Node/CommonJS
      module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
      // AMD
      define(factory);
    } else {
      // Browser globals
      global.contactForm = factory();
    }
  })(typeof window !== "undefined" ? window : this, function() {
    const contactForm = {
      submit: function(formId) {
        const form = document.getElementById(formId);
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });
        console.log("Form data:", data);
        alert("Form submitted! Check console for data.");
      }
    };
  
    return contactForm;
  });