const addBtn = document.getElementById("add-btn");
const modal = document.getElementById("modal");
addBtn.addEventListener("click", () => {
  modal.showModal();
});

class Animal {
  constructor(name, species, trait) {
    this.name = name;
    this.species = species;
    this.trait = trait;
  }
}
