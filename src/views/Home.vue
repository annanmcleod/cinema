
  <template>
    <section>
      <div class = "nav">
        <router-link to="/#/#">
            <img src = "@/assets/images/logo2.png" class = "logo" alt = "cinescope"/>
        </router-link>
        
        <div class = "links">
          <ul>
            <li><a><router-link to="/#/#">Home</router-link></a></li>
            <li><a><router-link to="/genre">Genre</router-link></a></li>
            <li><a><router-link to="/list">My List</router-link></a></li>
          </ul>
        </div>
      </div>
      <Movie />
        <!-- <router-link>
          <img src = "@/assets/images/profile.png" class = "profile" alt = "poster"/>
        </router-link> -->
        <div class = "main">
          <img src = "@/assets/images/main2.png" class = "poster" alt = "poster"/>
        </div>
        <h5>POPULAR</h5>
        <div class = "popular">
          <div class = "parent">
            <div class = "boxy">
              <div class = "card">
                <img src = "@/assets/images/movie5.png"/>
              </div>
            </div>

            <div class = "boxy">
              <div class = "card">
                <img src = "@/assets/images/movie5.png"/>
              </div>
            </div>

            <div class = "boxy">
              <div class = "card">
                <img src = "@/assets/images/movie5.png"/>
              </div>
            </div>

            <div class = "boxy">
              <div class = "card">
                <img src = "@/assets/images/movie5.png"/>
              </div>
            </div>

            <div class = "boxy">
              <div class = "card">
                <img src = "@/assets/images/movie5.png"/>
              </div>
            </div>
            </div>
          </div>
    </section>
  
    
</template>
  
  <script>
  // @ is an alias to /src
  import Movie from "@/components/Movie.vue";
  import Genre from "@/components/Genre.vue";
  import List from "@/components/List.vue";
  import Search from "@/components/Search.vue";

  export default {
    name: "Home",
    components: {
      Movie,
      Genre,
      List,
      Search
    }
  };
  </script>