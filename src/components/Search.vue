<template>
  <div class="container">
    <input
      v-model="title"
      class="form-control"
      type="text"
      placeholder="Search for Movies,Search & more"
      @keyup.enter="apply"
    />
    <div class="selects">
      <select
        v-for="filter in filters"
        :key="filter.name"
        v-model="$data[filter.name]"
        class="form-select"
      >
        <option value="" v-if="filter.name === 'year'">All Years</option>
        <option v-for="item in filter.item" :key="item">{{ item }}</option>
      </select>
    </div>
    <button class="btn btn-primary" @click="apply">Apple</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      type: "movie",
      number: 10,
      year: "",
      filters: [
        {
          name: "type",
          item: ["movie", "series", "eqisode"],
        },
        {
          name: "number",
          item: [10, 20, 30],
        },
        {
          name: "year",
          item: (() => {
            const years = [];
            const thisYear = new Date().getFullYear(); //2023
            for (let i = thisYear; i > 1985; i -= 1) {
              years.push(i);
            }
            return years;
          })(),
        },
      ],
    };
  },

  methods: {
    async apply() {
      const OMDB_API_KEY = "7035c60c";
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`
      );
      console.log(res);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  > * {
    margin-right: 10px;

    font-size: 15px;

    &:last-child {
      margin-right: 0;
    }
  }

  .selects {
    display: flex;

    select {
      width: 120px;

      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .btn {
    flex-shrink: 0;

    width: 120px;
    height: 50px;
    font-weight: 700;
  }
}
</style>
