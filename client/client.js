const express = require('express');

express()
.use(express.static('public'))
.listen(3000, () => {
    console.log(`listening on port 3000`)
});