import fakeImg from '../../assets/img/fake.jpg'

export const loadImage = (e, fake = false) => {
  if(!fake){
  
  if (!e.target.files.length) {
    return;
  }
  let file = document.querySelector("#image-input").files[0];
  let reader = new FileReader();
  const img = new Image();
  reader.onload = () => {
    img.src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
    
  } else {
    img.src = "";
  }
  img.onload = () => {
    let ctx = document.querySelector("#canvas").getContext("2d");
    ctx.clearRect(0, 0, 760, 450);
    ctx.drawImage(
      img,
      0,
      0,
      760, 450
    );
  };

}
else{
  let img = new Image();  // Создание нового объекта изображения
  img.src = fakeImg;
  img.onload = () => {
    let ctx = document.querySelector("#canvas").getContext("2d");
    ctx.clearRect(0, 0, 760, 450);
    ctx.drawImage(
      img,
      0,
      0,
      760, 450
    );
  };
}


};