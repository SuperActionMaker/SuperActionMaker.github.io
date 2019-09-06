var file = document.querySelector('#getfile');

file.onchange = function (){
  var fileList = file.files;
  //読み込み
  var reader = new FileReader();
  reader.readAsText(fileList[0]);

  //読み込み後
  reader.onload = function  () {
    document.querySelector('#preview').textContent = reader.result;
  };
};