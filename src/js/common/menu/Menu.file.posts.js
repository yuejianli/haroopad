MenuBar.file.Posts = function () {
  var gui = require('nw.gui');
  var submenu = new gui.Menu();

  submenu.append(
    new gui.MenuItem({
        label: 'Tumblr',
        click: function() {
          process.emit('file.posts.tumblr');
        }
    })
  );
  // submenu.append(
  //   new gui.MenuItem({
  //       label: 'Google DOCs'
  //   })
  // );

  return submenu;
}
