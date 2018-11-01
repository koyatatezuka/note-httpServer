`<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Add Note</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
  <link rel="stylesheet" media="screen" href="style.css" />
</head>

<body>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item">
        <a href="/">Home</a>
      </li>
      <li class="nav-item">
        <a href="/todo">To-Do</a>
      </li>
      <li class="nav-item">
        <a href="/addnote">Add Note</a>
      </li>
    </ul>
  </nav>
  <div class="toDo-container">
  <form class="add-note" action="/addnote" method="post">
  <textarea name="note" placeholder="write here..."></textarea>
  <button type="submit">Post It</button>
</form>
  </div>
</body>

</html>`