var fs = require('fs');
var path = require('path');

var distPath = path.resolve(__dirname, '../dist');
var devPath = path.resolve(distPath, 'dev');
var devAssets = path.resolve(devPath, 'assets');
var devIndex = path.resolve(devPath, 'index.html');
var publicPath = path.resolve(distPath, 'public');


function rmdir(dir) {
  var filename, i, item, len, list, stat;
  list = fs.readdirSync(dir);
  for (i = 0, len = list.length; i < len; i++) {
    item = list[i];
    filename = path.join(dir, item);
    stat = fs.statSync(filename);
    if (filename === "." || filename === "..") {

    } else if (stat.isDirectory()) {
      rmdir(filename);
    } else {
      fs.unlinkSync(filename);
    }
  }
  return fs.rmdirSync(dir);
};

function createDevIndex() {
  console.log('dev index created');
  fs.writeFileSync(
    devIndex,
    fs.readFileSync(path.resolve(__dirname, '_index.dev.html'), 'utf8')
  );
}

function createDevAssets() {
  fs.mkdir(devAssets, function() {
    console.log('dev assets path created');
  });
}

function createDevPath() {
  fs.mkdir(devPath, function() {
    console.log('dev path created');
    createDevIndex();
    createDevAssets();
  });
}

function createPublicPath() {
  console.log('public path created');
  fs.mkdir(publicPath); 
}

fs.access(distPath, function(err) {
  if (err) {
    fs.mkdir(distPath, function() {
      createDevPath();
      createPublicPath();
    });
  } else {
    fs.access(devPath, function(err) {
      if (err) {
        createDevPath();
      } else {
        fs.access(devAssets, function(err) {
          if (err) {
            createDevAssets();
          }
        });
        
        fs.access(devIndex, function(err) {
          if (err) {
            createDevIndex();
          }
        });
      }
    });

    fs.access(publicPath, function(err) {
      if (err) {
        createPublicPath();
      }
    });
  }
});
