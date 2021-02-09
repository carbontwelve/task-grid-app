<template>
  <div class="ui--workbook" :style="`--fixed-column-width: ${sidebarWidth}vw`">
    <header class="header">
      <div>Tasks</div>
      <div class="milestones">
        <div v-for="(milestone, idx) in milestones" :key="idx">
          {{ milestone.name }}
        </div>
      </div>
    </header>
    <section>
      <div class="row" v-for="task in tasks" :key="task.id">
        <div class="task-bar">
          <span>{{ task.name }}</span>
        </div>
        <div class="milestones">
          <div v-for="(milestone, idx) in task.milestones" :key="idx">
            <select
              v-model="milestone.value"
              :class="{
                'v-yes': milestone.value > 0,
                'v-maybe': milestone.value === 0,
                'v-no': milestone.value < 0,
              }"
            >
              <option :value="1">Yes</option>
              <option :value="0">N/A</option>
              <option :value="-1">No</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <!--    <footer>Hello world</footer>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarWidth: 35,
      milestones: [],
      tasks: [],
    }
  },
  created() {
    for (let id = 0; id < 8; id++) {
      this.milestones.push({
        id,
        name: 'Wk.' + (id + 1),
      })
    }

    for (let id = 0; id < 30; id++) {
      const milestones = []
      for (let i = 0; i < 8; i++) {
        milestones.push({ id: i, value: 0 })
      }
      this.tasks.push({
        id,
        name: 'Lorem ipsum',
        milestones,
      })
    }
  },
}
</script>

<style>
:root {
  --fixed-column-width: 35vw;
}

.ui--workbook {
  @apply flex-grow grid grid-cols-1;
  grid-template-rows: 3rem 1fr;
  overflow: hidden;
}

.ui--workbook header,
.ui--workbook footer {
  @apply col-span-12 row-span-1 bg-gray-400;
}

.ui--workbook header {
  grid-template-columns: var(--fixed-column-width) 1fr;
  grid-template-rows: 3rem;
  display: grid;
  padding-right: 17px;
}

.ui--workbook header > div {
  @apply px-4 flex-grow flex items-center;
}

.ui--workbook header > div:first-child {
  max-width: var(--fixed-column-width);
  border-right: 2px solid #e2e8f0;
}

.ui--workbook section {
  @apply col-span-12 row-span-1 bg-gray-200;
  height: calc(100vh - 3rem);
  width: 100%;
  overflow-y: scroll;
}

.ui--workbook section .row {
  display: grid;
  grid-template-columns: var(--fixed-column-width) 1fr;
  grid-template-rows: 2rem;
  border-bottom: 1px solid #cbd5e0;
}

.ui--workbook section .row .task-bar {
  border-right: 2px solid #e2e8f0;
  background: white;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
}

.ui--workbook .milestones {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
.ui--workbook section .row .task-bar,
.ui--workbook .milestones > div {
  display: flex;
  align-items: center;
}

.ui--workbook .milestones > div {
  height: 100%;
  justify-content: center;
  border-left: 1px solid #ffffff;
  border-right: 1px solid #cbd5e0;
}

.ui--workbook .task-bar > span {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

select {
  height: 100%;
  width: 100%;
  background: transparent;
  outline-color: #eda236;
}

select.v-no {
  @apply bg-red-500 text-white;
}

select.v-maybe {
  background-color: #e9ebef;
}

select.v-yes {
  @apply bg-yellow-200;
}
</style>
