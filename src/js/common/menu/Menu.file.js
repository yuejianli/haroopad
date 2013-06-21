MenuBar.file = function () {
	var gui = require('nw.gui'),
			win = gui.Window.get();

	var File = new gui.Menu();	

	function menuItem(options) {
    return new gui.MenuItem(options);
  }

  function sepItem() {
    return new gui.MenuItem({
      type: 'separator'
    });
  }

	File.append(menuItem({
            label: 'New',
            click: function() {
                process.emit('menu.file.new');
            }
        })
	);
	File.append(menuItem({
            label: 'Open',
            click: function() {
                process.emit('menu.file.open');
            }
        })
	);
	File.append(menuItem({
            label: 'Open Recent',
            submenu: MenuBar.file.Recents()
        })
	);
	File.append(sepItem());
	
  File.append(menuItem({
          label: 'Save',
          click: function() {
              process.emit('menu.file.save');
          }
      })
  );
  File.append(menuItem({
          label: 'Save As',
          click: function() {
              process.emit('menu.file.save.as');
          }
      })
  );

  File.append(menuItem({
          label: 'Close',
          click: function() {
              process.emit('menu.file.close');
          }
      })
  );
	File.append(menuItem({
            type: 'separator'
        })
	);

	File.append(menuItem({
            label: 'Post',
            enabled: false,
            submenu: MenuBar.file.Posts()
        })
	);
  File.append(menuItem({
          label: 'Export',
          // enabled: false,
          submenu: MenuBar.file.Exports()
      })
  );
	File.append(menuItem({
            label: 'Activity stream',
            enabled: false,
            submenu: MenuBar.file.Activities()
        })
	);

    File.append(
        new gui.MenuItem({
            type: 'separator'
        })
    );
    File.append(
        new gui.MenuItem({
            label: 'Print...',
            click: function() {
                win.emit('menu.print.html');
            }
        })
    );
    // File.append(
    //     new gui.MenuItem({
    //         label: 'Print Markdown',
    //         click: function() {
    //             win.emit('menu.print.markdown');
    //         }
    //     })
    // );

    File.append(menuItem({
            type: 'separator'
        })
    );
    File.append(menuItem({
            label: 'Preferences',
            click: function() {
                process.emit('menu.preferences.show');
            }
        })
    );
    /*
	File.append(
        new gui.MenuItem({
            label: 'Page Setup'
        })
	);
	File.append(
        new gui.MenuItem({
            label: 'Print Source'
        })
	);
	File.append(
        new gui.MenuItem({
            label: 'Print Result'
        })
	);
     */

	return new gui.MenuItem({ label: 'File', submenu: File });
}