const addBtn = document.getElementById("add-btn");
const modal = document.getElementById("modal");
const modalAddBtn = document.getElementById("modal-add");
const modalCancelBtn = document.getElementById("modal-cancel");
const animalName = document.getElementById("name");
const animalSpecies = document.getElementById("species");
const animalTrait = document.getElementById("trait");
const animalPic = document.getElementById("file");
const portrait = document.getElementById("portrait");
console.log(portrait.innerHTML);

addBtn.addEventListener("click", () => {
  modal.showModal();
});

modalCancelBtn.addEventListener("click", () => {
  animalName.value = "";
  animalSpecies.value = "";
  animalTrait.value = "";
  animalPic.value = "";
  modal.close();
});

modalAddBtn.addEventListener("click", () => {
  // const newAnimal = new Animal(
  //   animalName.value,
  //   animalSpecies.value,
  //   animalTrait.value,
  //   animalPic.value
  // );
  // animalName.value = "";
  // animalSpecies.value = "";
  // animalTrait.value = "";
  console.log(animalPic.value);
});

class Animal {
  constructor(name, species, trait, image) {
    this.name = name;
    this.species = species;
    this.trait = trait;
    this.image = image;
  }
}
