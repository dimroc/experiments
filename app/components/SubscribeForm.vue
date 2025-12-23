<template>
  <div class="subscribe h-[150px] bg-white p-5 rounded-sm shadow-sm hover:shadow-lg transform transition-all duration-300 ease-out hover:-translate-y-1 border border-gray-200 hover:border-gray-300">
    <h2 class="text-xl mb-2">
      Subscribe for updates!
      <br />
      <small class="text-sm text-gray-600">
        Only one email every 6 months, if I even finish in time.
      </small>
    </h2>
    <div id="mc_embed_signup">
      <form
        action="https://dimroc.us17.list-manage.com/subscribe/post?u=df0348c05504dd2d1ad810ba6&amp;id=e110246a27"
        method="post"
        target="_blank"
        novalidate
        class="flex gap-2"
      >
        <input
          type="email"
          name="EMAIL"
          placeholder="email address"
          required
          class="border border-gray-300 px-3 py-1.5 text-sm flex-1"
        />
        <div class="absolute -left-[5000px]" aria-hidden="true">
          <input type="text" name="b_df0348c05504dd2d1ad810ba6_e110246a27" tabindex="-1" />
        </div>
        <input
          type="submit"
          value="Subscribe"
          class="bg-gray-800 text-white px-4 py-1.5 text-sm cursor-pointer hover:bg-gray-700"
        />
      </form>
    </div>
  </div>
</template>
