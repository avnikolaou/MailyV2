const keys = require('../../config/kyes');

module.exports = (survey) => {
    return `
     <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surverys/thanks">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surverys/thanks">No</a>
          </div>
        </div>
      </body>
    </html>
    `;
};
