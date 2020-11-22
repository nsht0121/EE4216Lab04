Vue.component('my-table', {
  props: ['rows', 'columns', 'activeClass'],
  template:`
    <table>
      <thead>
        <tr>
          <th scope="col"
            v-for="(val, key) in columns"
            :key="key"
            :class="activeClass[key]"
            @click="$emit('sort-field', key)"
          >
            {{ val }}
            <div v-if="activeClass[key].asc" class="arrow-up"></div>
            <div v-if="activeClass[key].desc" class="arrow-up"></div>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.year }}</td>
          <td>{{ row.rank }}</td>
        </tr>
      </tbody>
    </table>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    columns: {
      id: 'ID',
      name: 'Movie Name',
      year: 'Year',
      rank: 'Ranking',
    },
    rows: [
      { id: 0, name: 'Dummy Row', year: 1900, rank: 0.0 },
    ],
    activeClass: {
      id: { asc: false, desc: false },
      name: { asc: false, desc: false },
      year: { asc: false, desc: false },
      rank: { asc: false, desc: false }
    }
  },
  methods: {
    defaultClass: function() {
      return {
        id: { asc: false, desc: false },
        name: { asc: false, desc: false },
        year: { asc: false, desc: false },
        rank: { asc: false, desc: false }
      }      
    },
    getMovies: function() {
      fetch('api/movies')
      .then(res => res.json())
      .then(json => this.rows = json)
      .catch(e => console.log(e));
    },
    sortMovies: function(key) {
      if (this.activeClass[key].asc) {
        // Sort desc
        this.rows.sort(function(a, b) {
          if (typeof(a[key]) == 'number')
            return b[key] - a[key];
          else
            return b[key].localeCompare(a[key]);
        });

        this.activeClass = this.defaultClass();
        this.activeClass[key].desc = true;
      } else {
        // Sort asc
        this.rows.sort(function(a, b) {
          if (typeof(a[key]) == 'number')
            return a[key] - b[key];
          else
            return a[key].localeCompare(b[key]);
        });

        this.activeClass = this.defaultClass();
        this.activeClass[key].asc = true;
      }
    }
  },
  created: function() {
    this.getMovies();
  },
});