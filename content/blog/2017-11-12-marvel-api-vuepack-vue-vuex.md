---
id: 1580
title: Marvel API + Vuepack (Vue + Vuex)
date: 2017-11-12T11:54:12+00:00
author: Phong Huynh
layout: post

permalink: /marvel-api-vuepack-vue-vuex/
dsq_thread_id:
  - "6279479508"
image: /wp-content/uploads/2017/11/Screen-Shot-2017-11-11-at-3.33.59-PM.png
categories:
  - Learning
  - Posts
  - Programming
  - Web Development
tags:
  - api
  - javascript
  - programming
  - vuejs
  - vuex
---
<section class="section section--body">

## Getting Started with Vue, Vuex, and API calls {.section-divider}

_Originally published at <https://codeburst.io/marvel-api-vuepack-vue-vuex-c84067a7f7fc>._

<div class="section-content">
  <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p">
      TL;DR — This article will show you how to get quickly started with Vue and Vuex. In addition to grabbing data from an API and displaying it.
    </p>

    <p class="graf graf--p">
      We will be building a simple application that searches the Marvel database for characters then displays the results.
    </p>

    <h3 class="graf graf--h3">
      What is Vue?
    </h3>

    <blockquote class="graf graf--blockquote">
      <p>
        Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. (<a class="markup--anchor markup--blockquote-anchor" href="https://vuejs.org/v2/guide/" target="_blank" rel="nofollow noopener noreferrer" data-href="https://vuejs.org/v2/guide/">https://vuejs.org/v2/guide/</a>)
      </p>
    </blockquote>

    <h3 class="graf graf--h3">
      What is Vuex?
    </h3>

    <blockquote class="graf graf--blockquote">
      <p>
        Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. (<a class="markup--anchor markup--blockquote-anchor" href="https://vuex.vuejs.org/en/intro.html" target="_blank" rel="nofollow noopener noreferrer" data-href="https://vuex.vuejs.org/en/intro.html">https://vuex.vuejs.org/en/intro.html</a>)
      </p>
    </blockquote><figure class="graf graf--figure">

    <img class="graf-image" src="https://cdn-images-1.medium.com/max/1600/1*vmhxmp5jRp-4Rtfh3skrgQ.png" data-image-id="1*vmhxmp5jRp-4Rtfh3skrgQ.png" data-width="701" data-height="551" /><figcaption class="imageCaption"><a class="markup--anchor markup--figure-anchor" href="https://vuex.vuejs.org/en/images/vuex.png" target="_blank" rel="nofollow noopener noreferrer" data-href="https://vuex.vuejs.org/en/images/vuex.png">https://vuex.vuejs.org/en/images/vuex.png</a></figcaption></figure>

    <h3 class="graf graf--h3">
      What is VuePack?
    </h3>

    <p class="graf graf--p">
      <a class="markup--anchor markup--p-anchor" href="https://github.com/egoist/vuepack" target="_blank" rel="noopener noreferrer" data-href="https://github.com/egoist/vuepack">Vuepack</a> is a starter kit which uses Vue 2, Vuex, Vue-router and Webpack 2. It essentially bootstraps and configures your project for you with these technologies.
    </p>

    <h3 class="graf graf--h3">
      Getting Started
    </h3><figure class="graf graf--figure">

    <img class="graf-image" src="https://cdn-images-1.medium.com/max/1600/1*JtzSleyt8MWcfm_r85Bpaw.gif" data-image-id="1*JtzSleyt8MWcfm_r85Bpaw.gif" data-width="1022" data-height="544" /><figcaption class="imageCaption">What we will Build</figcaption></figure>

    <p class="graf graf--p">
      The application we are implementing will search the Marvel database (via API) for characters based on user input and then display the results.
    </p>

    <p class="graf graf--p">
      <a class="markup--anchor markup--p-anchor" href="https://github.com/xphong/marvel-vue-demo" target="_blank" rel="noopener noreferrer" data-href="https://github.com/xphong/marvel-vue-demo">GitHub Repo for this demo</a>
    </p>

    <h4 class="graf graf--h4">
      Marvel API
    </h4>

    <p class="graf graf--p">
      First, you will need a Marvel API key, so go over to the <a class="markup--anchor markup--p-anchor" href="https://developer.marvel.com/" target="_blank" rel="noopener noreferrer" data-href="https://developer.marvel.com/">Marvel Developer Portal</a> and sign up for an API key.
    </p>

    <p class="graf graf--p">
      For the API calls, you can either directly call the API from <a class="markup--anchor markup--p-anchor" href="http://gateway.marvel.com/v1/public/characters" target="_blank" rel="noopener noreferrer" data-href="http://gateway.marvel.com/v1/public/characters">http://gateway.marvel.com/v1/public</a> or use a <a class="markup--anchor markup--p-anchor" href="https://github.com/xphong/marvel-powerlevels-api" target="_blank" rel="noopener noreferrer" data-href="https://github.com/xphong/marvel-powerlevels-api">Node server</a> as a proxy. However, if you are calling it directly then you will have to deal with Cross-Origin Resource Sharing (CORS). For this article, I will be using my own <a class="markup--anchor markup--p-anchor" href="https://github.com/xphong/marvel-powerlevels-api" target="_blank" rel="noopener noreferrer" data-href="https://github.com/xphong/marvel-powerlevels-api">Marvel Power Levels API</a>, written in Node and Express.
    </p>

    <h4 class="graf graf--h4">
      VuePack
    </h4>

    <p class="graf graf--p">
      We will be creating our Vue.js project with <a class="markup--anchor markup--p-anchor" href="https://github.com/egoist/vuepack" target="_blank" rel="noopener noreferrer" data-href="https://github.com/egoist/vuepack">VuePack</a> using the <a class="markup--anchor markup--p-anchor" href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener noreferrer" data-href="https://github.com/vuejs/vue-cli">vue-cli</a>. The vue-cli allows you to use different open source templates which will get you up and running without all the hassle of configurations.
    </p>

    <pre class="graf graf--pre">$ npm install -g vue-cli
$ vue init egoist/vuepack new-project
$ cd new-project
$ npm install</pre>

    <p class="graf graf--p">
      Use the default options for the scaffolding (vue init):
    </p>

    <pre class="graf graf--pre">? Do you want to use ESLint? Yes
? Generate components in JSX format? No
? Support Electron? No
? Add testcafe to run integration tests? No</pre>

    <h4 class="graf graf--h4">
      Axios for API calls
    </h4>

    <p class="graf graf--p">
      We will be using <a class="markup--anchor markup--p-anchor" href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer" data-href="https://github.com/axios/axios">Axios</a> for our API calls.
    </p>

    <pre class="graf graf--pre">$ npm install axios --save</pre>

    <h4 class="graf graf--h4">
      Semantic UI
    </h4>

    <p class="graf graf--p">
      Finally, we will be using <a class="markup--anchor markup--p-anchor" href="https://semantic-ui.com/" target="_blank" rel="noopener noreferrer" data-href="https://semantic-ui.com/">Semantic UI</a> as our CSS framework.
    </p><figure class="graf graf--figure graf--iframe">

    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
        <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta http-equiv="Content-type" content="text/html; charset=utf-8"/&gt;
    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.6/semantic.min.css"&gt;
    &lt;title&gt;&lt;%= htmlWebpackPlugin.options.title %&gt;&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id="app"&gt;&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
      </div>

      <div class="iframeContainer">
      </div>
    </div><figcaption class="imageCaption">build/index.html</figcaption></figure>

    <p class="graf graf--p">
      Inside <code class="markup--code markup--p-code">build/index.html</code>, add <code class="markup--code markup--p-code u-paddingRight0 u-marginRight0">&lt;link rel=”stylesheet” href=”&lt;a class="markup--anchor markup--p-anchor" href="https://cdn.jsdelivr.net/semantic-ui/2.2.6/semantic.min.css" target="_blank" rel="nofollow noopener noreferrer" data-href="https://cdn.jsdelivr.net/semantic-ui/2.2.6/semantic.min.css">https://cdn.jsdelivr.net/semantic-ui/2.2.6/semantic.min.css&lt;/a>"&gt;</code>
    </p>

    <h4 class="graf graf--h4">
      Start Developing
    </h4>

    <p class="graf graf--p">
      To run the application and start developing:
    </p>

    <pre class="graf graf--pre">$ npm run dev</pre>

    <p class="graf graf--p">
      Open up your browser to <code class="markup--code markup--p-code">localhost:4000</code>. You should now see the default counter that is built in with the application.
    </p><figure class="graf graf--figure">

    <img class="graf-image" src="https://cdn-images-1.medium.com/max/1600/1*Srp7HPaOxH1JF1c9J07Qxw.png" data-image-id="1*Srp7HPaOxH1JF1c9J07Qxw.png" data-width="1568" data-height="988" /><figcaption class="imageCaption">Default VuePack Counter Application</figcaption></figure>

    <p class="graf graf--p">
      Inside <code class="markup--code markup--p-code">store/index.js</code> we will be removing the default counter store code and setting up our own store for Marvel characters.
    </p>

    <p class="graf graf--p">
      Replace the code with the following:
    </p><figure class="graf graf--figure graf--iframe">

    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
        <pre>import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  data: []
}

const mutations = {
  RECEIVE_CHARACTERS (state, { characters }) {
    state.data = characters
  }
}

const actions = {
  async FETCH_CHARACTERS ({ commit }, name) {
    const url = `http://localhost:8080/api/characters?limit=12&name=${name}`
    const { data } = await axios.get(url)
    commit('RECEIVE_CHARACTERS', { characters: data.results })
  }
}

const getters = {
  characters: state =&gt; {
    return state.data.map(data =&gt; {
      return {
        name: data.name,
        url: data.urls[1] ? data.urls[1].url : data.urls[0].url,
        image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
        description: data.description === '' ? 'No description listed for this character.' : data.description
      }
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store</pre>
      </div>
    </div><figcaption class="imageCaption">store/index.js</figcaption></figure>

    <p class="graf graf--p">
      In our store, we have 4 different parts that make up the store.
    </p>

    <h4 class="graf graf--h4">
      <strong class="markup--strong markup--h4-strong">State</strong>
    </h4>

    <p class="graf graf--p">
      The state refers to an object where we define the data for our application structure. This data is to be used throughout our components, also known as the “single source of truth”.
    </p>

    <pre class="graf graf--pre">const state = {
  data: []
}</pre>

    <p class="graf graf--p">
      For our application, we will only have 1 state which is data. <code class="markup--code markup--p-code">data</code> will contain our character data that is returned from the Marvel API.
    </p>

    <h4 class="graf graf--h4">
      <strong class="markup--strong markup--h4-strong">Mutations</strong>
    </h4>

    <p class="graf graf--p">
      Mutations are where we write events that update the store. Mutation events are also the only way to update the store. A mutation has a string <strong class="markup--strong markup--p-strong">type</strong> and a <strong class="markup--strong markup--p-strong">handler</strong> function.
    </p>

    <pre class="graf graf--pre">const mutations = {
  RECEIVE_CHARACTERS (state, { characters }) {
    state.data = characters
  }
}</pre>

    <p class="graf graf--p">
      In our application, the type is <code class="markup--code markup--p-code">RECEIVE_CHARACTERS</code> and the handler function updates the state’s data array with the payload that is passed in.
    </p>

    <h4 class="graf graf--h4">
      <strong class="markup--strong markup--h4-strong">Actions</strong>
    </h4>

    <p class="graf graf--p">
      Actions are where we write functions that will commit changes to the store. Instead of mutating the store’s state directly, actions commit mutations, which then updates the state. Actions are called with a dispatch call, ex: <code class="markup--code markup--p-code">this.$store.dispatch('FETCH_CHARACTERS')</code>
    </p>

    <pre class="graf graf--pre">const actions = {
  async FETCH_CHARACTERS ({ commit }, name) {
    const url = `<a class="markup--anchor markup--pre-anchor" href="http://localhost:8080/api/characters?limit=12&name=$%7Bname%7D&#96;" target="_blank" rel="nofollow noopener noreferrer" data-href="http://localhost:8080/api/characters?limit=12&name=${name}&#96;">http://localhost:8080/api/characters?limit=12&name=${name}`</a>
    const { data } = await axios.get(url)
    commit('RECEIVE_CHARACTERS', { characters: data.results })
  }
}</pre>

    <p class="graf graf--p">
      Additionally, actions can be asynchronous so this is where we will put our API calls.
    </p>

    <p class="graf graf--p">
      In our action <code class="markup--code markup--p-code">FETCH_CHARACTERS</code>, we are doing an asynchronous call to the API using Axios. Then when the async call is finished, we do a commit to the <code class="markup--code markup--p-code">RECEIVE_CHARACTERS</code> mutation with the API data results.
    </p>

    <h4 class="graf graf--h4">
      <strong class="markup--strong markup--h4-strong">Getters</strong>
    </h4>

    <p class="graf graf--p">
      Getters are helper functions that retrieve data from our state.
    </p>

    <pre class="graf graf--pre">const getters = {
  characters: state =&gt; {
    return state.data.map(data =&gt; {
      return {
        name: data.name,
        url: data.urls[1] ? data.urls[1].url : data.urls[0].url,
        image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
        description: data.description === '' ? 'No description listed for this character.' : data.description
      }
    })
  }
}</pre>

    <p class="graf graf--p">
      In our application, we are using a getter to take the computed data and return a simplified object that we can use. The reason to use a getter here is because sometimes an API will return data we do not need or the data that we do need is deeply nested.
    </p>

    <h4 class="graf graf--h4">
      <strong class="markup--strong markup--h4-strong">Special Mention: Modules</strong>
    </h4>

    <p class="graf graf--p">
      We are not using modules inside our application because they are a better fit for larger applications with multiple states.
    </p>

    <blockquote class="graf graf--blockquote">
      <p>
        Due to using a single state tree, all state of our application is contained inside one big object. However, as our application grows in scale, the store can get really bloated.
      </p>
    </blockquote>

    <blockquote class="graf graf--blockquote">
      <p>
        To help with that, Vuex allows us to divide our store into modules. Each module can contain its own state, mutations, actions, getters, and even nested modules — it’s fractal all the way down. (<a class="markup--anchor markup--blockquote-anchor" href="https://vuex.vuejs.org/en/modules.html" target="_blank" rel="nofollow noopener noreferrer" data-href="https://vuex.vuejs.org/en/modules.html">https://vuex.vuejs.org/en/modules.html</a>)
      </p>
    </blockquote>

    <h3 class="graf graf--h3">
      Creating Components
    </h3>

    <p class="graf graf--p">
      Now that we have created our store and understand the core concepts of the Vuex store, we can now create components that interact with the store.
    </p>

    <h4 class="graf graf--h4">
      SearchCharacterForm Component
    </h4>

    <p class="graf graf--p">
      The first component we will be creating is the SearchCharacterForm. This component will contain our template and logic for the search textbox.
    </p><figure class="graf graf--figure">

    <img class="graf-image" src="https://cdn-images-1.medium.com/max/1600/1*5g2-RR5HvEQdneYvlttm6Q.png" data-image-id="1*5g2-RR5HvEQdneYvlttm6Q.png" data-width="608" data-height="286" /><figcaption class="imageCaption">Search Character Form Component</figcaption></figure>

    <p class="graf graf--p">
      Inside <code class="markup--code markup--p-code">client/components</code>, create a new file called <code class="markup--code markup--p-code">SearchCharacterForm.vue</code>.
    </p>

    <p class="graf graf--p">
      Add this code to <code class="markup--code markup--p-code">SearchCharacterForm.vue</code>:
    </p><figure class="graf graf--figure graf--iframe">

    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
        <pre>&lt;template&gt;
  &lt;div class="search-character__form"&gt;
    &lt;form @submit.prevent
      @submit="handleSearch()"&gt;

      &lt;div class="ui action input"&gt;
        &lt;input v-model="name"
          placeholder="Character Name"
          type="text"
          required /&gt;

          &lt;button class="ui icon pink button"&gt;
            &lt;i class="search icon"&gt;&lt;/i&gt;
          &lt;/button&gt;
      &lt;/div&gt;
    &lt;/form&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    handleSearch () {
      this.$store.dispatch('FETCH_CHARACTERS', this.name)
    }
  }
}
&lt;/script&gt;</pre>
      </div>
    </div><figcaption class="imageCaption">client/components/SearchCharacterForm.vue</figcaption></figure>

    <p class="graf graf--p">
      The main things to note here are the data and methods.
    </p>

    <p class="graf graf--p">
      Data is used to define the properties that will be added to Vue’s reactivity system. This means that when the value of the property changes, the view will “react”, updating to match the new values and vice-versa. Also known as two-way binding. We will be using the <code class="markup--code markup--p-code">name</code> property to tell our action what Marvel character name to fetch.
    </p>

    <p class="graf graf--p">
      Methods are used to define functions that will be used for any event handlers inside the template. In our application, we created the <code class="markup--code markup--p-code">handleSearch</code> method which dispatches an action to fetch characters. The fetch characters action will then update the store’s data state with the API results.
    </p>

    <h4 class="graf graf--h4">
      CharactersList Component
    </h4>

    <p class="graf graf--p">
      To show the results from the search textbox, we will need to create a CharactersList component. This component will contain our template and logic to display the characters data from our store.
    </p><figure class="graf graf--figure">

    <img class="graf-image" src="https://cdn-images-1.medium.com/max/1600/1*_xmqw5Df4vcXd5oatBa6DQ.png" data-image-id="1*_xmqw5Df4vcXd5oatBa6DQ.png" data-width="2321" data-height="1070" /><figcaption class="imageCaption">Characters List Component</figcaption></figure>

    <p class="graf graf--p">
      Inside <code class="markup--code markup--p-code">client/components</code>, create a new file called <code class="markup--code markup--p-code">CharactersList.vue</code>.
    </p>

    <p class="graf graf--p">
      Add this code to the <code class="markup--code markup--p-code">CharactersList.vue</code>:
    </p><figure class="graf graf--figure graf--iframe">

    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
        <pre>&lt;template&gt;
  &lt;div v-if="!!characters.length" class="ui characters-list cards"&gt;
    &lt;div v-for="character in characters" :key="character.name" class="ui card fadeIn-animation"&gt;
      &lt;div class="image"&gt;
          &lt;img :src="character.image" /&gt;
      &lt;/div&gt;
      &lt;div class="content"&gt;
        &lt;div class="header"&gt;{{character.name}}&lt;/div&gt;
        &lt;div class="description"&gt;
          {{character.description}}
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="extra content"&gt;
        &lt;span class="right floated"&gt;
          &lt;a target="_blank" :href="character.url"&gt;
            &lt;button class="ui icon purple tiny button"&gt;
                More Info
            &lt;/button&gt;
          &lt;/a&gt;
        &lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'characters'
  ])
}
&lt;/script&gt;

&lt;style&gt;
.characters-list.cards {
  margin-top: 2em;
  justify-content: center;
}

.characters-list.cards .image {
    position: relative;
    width: 100%;
    height: 246px;
    overflow: hidden;
}

.characters-list.cards .image img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
}

.ui.card, .ui.cards &gt; .card {
  width: 364px;
}
&lt;/style&gt;</pre>
      </div>
    </div></figure>

    <p class="graf graf--p">
      The component will display and render the search results from our store’s state. In this component, we use the <code class="markup--code markup--p-code">characters</code> getter that we created earlier in our store file. Using a getter allows us to retrieve and use our state data in a clean and minimal way instead of doing a lot of data manipulation to get what we want.
    </p>

    <p class="graf graf--p">
      Furthermore, we access our characters getter as a computed property because we want our component to always get the current state once it gets altered. So when the user searches a different Marvel character, the list will be updated because our CharactersList component knows to use the latest and current state data.
    </p>

    <h4 class="graf graf--h4">
      Displaying the Components
    </h4>

    <p class="graf graf--p">
      To finish up, we need to add these components in our Home view.
    </p>

    <p class="graf graf--p">
      Inside <code class="markup--code markup--p-code">views/Home.vue</code> , replace the code with:
    </p><figure class="graf graf--figure graf--iframe">

    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
        <pre>&lt;template&gt;
  &lt;div class="page"&gt;
    &lt;search-character-form&gt;&lt;/search-character-form&gt;
    &lt;characters-list&gt;&lt;/characters-list&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import SearchCharacterForm from 'components/SearchCharacterForm'
import CharactersList from 'components/CharactersList'

export default {
  components: {
    SearchCharacterForm,
    CharactersList
  }
}
&lt;/script&gt;</pre>
      </div>
    </div></figure>

    <h3 class="graf graf--h3">
      Conclusion
    </h3>

    <p class="graf graf--p">
      Going through the whole flow, a character search will <strong class="markup--strong markup--p-strong">dispatch</strong> an <strong class="markup--strong markup--p-strong">action</strong> that calls the <strong class="markup--strong markup--p-strong">API</strong>, and <strong class="markup--strong markup--p-strong">commits</strong> a mutation<strong class="markup--strong markup--p-strong">. </strong>The <strong class="markup--strong markup--p-strong">mutation</strong> then updates the <strong class="markup--strong markup--p-strong">state data</strong>, which is then displayed with the CharactersList component that uses the characters <strong class="markup--strong markup--p-strong">getter</strong>.
    </p>

    <p class="graf graf--p">
      Now, if you run the app with <code class="markup--code markup--p-code">npm run dev</code> you should be able to see a search form. Searching a valid Marvel character should then display a list of the results.
    </p><figure class="graf graf--figure">

    <img class="graf-image" src="https://cdn-images-1.medium.com/max/1600/1*Xd7VXrN6unl8WVe9z_-e_Q.gif" data-image-id="1*Xd7VXrN6unl8WVe9z_-e_Q.gif" data-width="1132" data-height="510" /><figcaption class="imageCaption">Final Result</figcaption></figure>

    <p class="graf graf--p">
      <a class="markup--anchor markup--p-anchor" href="https://github.com/xphong/marvel-vue-demo" target="_blank" rel="noopener noreferrer" data-href="https://github.com/xphong/marvel-vue-demo">GitHub Repo for this demo</a>
    </p>
  </div>
</div></section> <section class="section section--body">

<div class="section-divider">
  <hr class="section-divider" />
</div>

<div class="section-content">
  <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p">
      <a class="markup--anchor markup--p-anchor" href="https://medium.com/@xphong" target="_blank" rel="noopener noreferrer" data-href="https://medium.com/@xphong">Phong Huynh<br /> </a>Software Developer<br /> <a class="markup--anchor markup--p-anchor" href="https://twitter.com/xphong" target="_blank" rel="noopener noreferrer" data-href="https://twitter.com/xphong">@xphong</a>
    </p>
  </div>
</div></section>
