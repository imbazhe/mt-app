<template>
  <div class />
</template>

<script>
export default {
  layout: "blank",
  middleware: async ctx => {
    let { state, data } = await ctx.$axios.get("/users/exit");
    if (state === 200 && data && data.code === 0) {
      window.location.href = "/";
    }else{
      window.location.href = "/";
    }
  }
};
</script>