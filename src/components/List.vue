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
        <h4>MY LIST</h4>
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
        
    </section>
</template>
