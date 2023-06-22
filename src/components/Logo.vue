<template>
  <RouterLink to="/" class="logo"> <span>OMDBDAPI </span>.COM </RouterLink>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss//main.scss";
.logo {
  font-family: "Oswals", sans-serif;
  font-size: 20px;
  color: $black;
  text-decoration: none;

  &:hover {
    color: $black;
  }
  span {
    color: $primary;
  }
}
</style>
