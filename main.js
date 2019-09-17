Vue.component('app-header', {
    template: `
        <header class="solid" >
            
        </header>
    `,
    props: ['name']
})

Vue.component('app-image', {
    template: `
        <div>
            <h2 class="name" > {{ name }} </h2>
            <h3> {{ area }} - {{ category }}</h3>
            <img v-if="!loading" class="image" :src="imgSrc">
            <p v-else >loading...</p>
        </div>
    `,
    props: ['imgSrc', 'name', 'area', 'category'],
    data: function() {
        return {
            loading: this.$root.loading
        }
    }
})

Vue.component('app-description', {
    template: `
        <div>
            <h3>Instructions</h3>
            {{instructions}}
        </div>
    `,
    props: ['instructions']
})

Vue.component('app-content-container' ,{
    template: `
        <main class="section-wrap" >
            <div class="section-one" >
                <app-image :category="mealData.strCategory" 
                           :area="mealData.strArea" 
                           :name="mealData.strMeal" 
                           :imgSrc="mealData.strMealThumb"></app-image>
            </div>
            <div class="section-two" >
                <app-description :instructions="mealData.strInstructions" ></app-description>
            </div>
        </main>
    `,
    data: function() {
        return {
            mealData: [],
            loading: true
        }
    },
    mounted() {

        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => this.mealData = res.data.meals[0])
        .then(() => loading = false)
        .catch(err => console.log(err));

    }
})

new Vue({
    el: "#app"
}) 