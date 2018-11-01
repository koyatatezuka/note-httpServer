`<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>To-Do</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
  <link rel="stylesheet" media="screen" href="/style.css" />
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
    
    <form class="notes" action="/todo" method="POST">
        <textarea name="notes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat animi eius facere dolorem iusto dolore</textarea>
      <div class="btn-container">
        <button class="delete-btn" type="submit" name="method" value="delete" value="DELETE">delete</button>
        <button class="update-btn" type="submit" name="method" value="put">update</button>
      </div>

    </form>
  </div>
</body>

</html>`