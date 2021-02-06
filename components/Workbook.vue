<template>
  <div class="ui--workbook" :style="`--fixed-column-width: ${sidebarWidth}vw`">
    <header class="header">
      <div>Tasks</div>
      <div>Milestones</div>
    </header>
    <section>
      <div class="ui--workbook-table">
        <div class="fixed-column">
          <ul>
            <li v-for="i in 100">Hello {{ i }}</li>
          </ul>
        </div>
        <div class="scrolling-container">
          <div style="background: pink; width: 1000px; height: 100px">hi</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarWidth: 25,
    }
  },
}
</script>

<style>
:root {
  --fixed-column-width: 25vw;
}

.ui--workbook {
  @apply flex-grow grid grid-cols-1;
  grid-template-rows: 3rem 1fr;
  overflow: hidden;
}

.ui--workbook header {
  @apply col-span-12 row-span-1 bg-gray-400 flex flex-row;
}

.ui--workbook header div {
  @apply px-4 flex-grow flex items-center;
}

.ui--workbook header div:first-child {
  max-width: var(--fixed-column-width);
  border-right: 2px solid #e2e8f0;
}

.ui--workbook section {
  @apply col-span-12 row-span-1 bg-gray-200;
  height: calc(100vh - 3rem);
}

.ui--workbook-table {
  margin-left: var(--fixed-column-width);
  position: relative;
  display: grid;
  grid-template-columns: var(--fixed-column-width) 1fr;
  height: 100%;
  overflow: scroll;
}

.ui--workbook-table .fixed-column {
  width: var(--fixed-column-width);
  position: fixed;
  background: white;
  border-right: 2px solid #e2e8f0;
}

.ui--workbook-table .scrolling-container {
}
</style>
