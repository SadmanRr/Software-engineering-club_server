const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json()); 
app.use(cors())
app.use("/images", express.static("images"))
app.use(express.urlencoded({ extended: true }))
const userRoute = require('./module/user/route'); 
const productRoute = require('./module/event/route');
const wingRoute = require('./module/wings/route');
const certificateRoute = require('./module/certificate/route');
const noticeRoute = require('./module/notice/route');
// const contactRoute = require('./src/routes/contact.routes');
// const bannerRoute = require('./src/routes/homeRoutes/banner.routes');
// const veganRoute = require('./src/routes/homeRoutes/vegan.routes');
// const madeRoute = require('./src/routes/madetoorder/madeHome.routes');
// const detailsRoute = require('./src/routes/madetoorder/madeDetails.routes');
// const insideRoute = require('./src/routes/inside.routes');
// const appointmentRoute = require('./src/routes/madetoorder/madeAppointment.routes');
// const paymentRoute = require('./src/routes/payment.routes');
// app.use("/api/v1/", bannerRoute);
//      app.use("/api/v1/", veganRoute);
//      app.use("/api/v1/", madeRoute);
//      app.use("/api/v1/", detailsRoute);
//      app.use("/api/v1/", appointmentRoute);
//      app.use("/api/v1/", insideRoute);
   app.use("/api/v1/", userRoute); 
   app.use("/api/v1/", productRoute);
   app.use("/api/v1/", wingRoute);
   app.use("/api/v1/", certificateRoute);
   app.use("/api/v1/", noticeRoute);
//    app.use("/api/v1/", contactRoute);
//    app.use("/api/v1/", paymentRoute);
module.exports = app; 

// d2E2OxA3BJDlrl3m