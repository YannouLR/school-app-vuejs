<template>
  <div class="form">
    <form>
      <h2>Ajouter une note à un élève</h2>
      <input type="text" id="name" name="name" placeholder="Nom de l'élève" />
      <input
        type="text"
        id="matiere"
        name="matiere"
        placeholder="Nom de la matière"
      />
      <input
        type="number"
        name="note"
        id="note"
        min="0"
        max="20"
        step="0.01"
        placeholder="Note /20"
      />
      <select name="prof" id="prof">
        <option value>--Nom du professeur--</option>
        <option value="Jean">Jean</option>
      </select>
      <input type="submit" value="valider" class="valider" />
    </form>
  </div>
</template>

<style scoped>
form {
  background-color: rgb(224, 175, 62);
  height: 25rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.valider {
  width: 35%;
  cursor: pointer;
}
</style>
