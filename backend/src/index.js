//IMPORT ENV VARIABLES
require('dotenv').config();
const PORT = process.env.PORT || 3001;

//IMPORTS
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require("cors");

//INITIALIZE SERVER OBJ
const app = express();

//MOUNT MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//IMPORT ROUTES
const usersRouter = require('./routes/users');
const sessionsRouter = require('./routes/sessions');
const searchRouter = require('./routes/search');
const dashboardAnalysisRouter = require('./routes/dashboardAnalysis');
const favouritesRouter = require('./routes/favourites');

//MOUNT ROUTES
app.use('/api/search', searchRouter);
app.use('/api/dashboard-analysis', dashboardAnalysisRouter);
app.use('/api/favourites', favouritesRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/users', usersRouter);

//START SERVER
app.listen(PORT, () => {
  console.log(`API Server is listening on port ${PORT}`);
});