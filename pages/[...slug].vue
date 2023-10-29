<template>
  <main>
    <ContentDoc />
  </main>
</template>
<script setup>
  const route = useRoute();
  const page = await queryContent(route.path).findOne();
  useSeoMeta({
    title: page.title,
    ogTitle: page.title,
    description: page.description,
    ogDescription: page.description,
  });
  defineOgImage({
    component: "Example",
    title: page.title,
    description: page.description,
  });
</script>
