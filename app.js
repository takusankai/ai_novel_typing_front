const express = require('express');
const app = express();

// 'public' ディレクトリを静的ファイルのルートとして設定
app.use('/', express.static('views'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);