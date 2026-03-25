const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/users');
const jobRoutes = require('./routes/jobs');

app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
