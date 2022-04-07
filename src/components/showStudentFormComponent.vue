<template>
  <div class="form">
    <form>
      <h3 class="h3-exclure">Expulser</h3>
      <div class="radio">
        <label for="definitif">Définitivement</label>
        <input type="radio" name="definitif" id="definitif" />
      </div>
      <div class="temp">
        <label for="temporairement">Temporairement</label>
        <input
          type="number"
          name="temporairement"
          id="temporairement"
          min="1"
          max="3"
        />
      </div>
      <input type="submit" value="Exclure" class="exclure" />
    </form>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 2rem;
  background-color: black;
  width: 70%;
  margin: auto;
  height: 20rem;
  border-radius: 20px;
}
.exclure {
  width: 50%;
  cursor: pointer;
}
.radio {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.temp {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.h3-exclure {
  margin-bottom: -10px;
  font-size: 2rem;
}
#temporairement {
  margin: auto;
}
</style>
