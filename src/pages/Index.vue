<template>
  <q-page class="flex flex-center column bg-grey-14">
    <q-card class="q-mb-lg bg-custom">
        <q-card-section>
          <div class="text-h6">Quartos da Casa</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <q-btn-toggle
          v-model="modelRoom"
          v-on:click="modelRoomChange"
          push
          rounded
          glossy
          toggle-color="dark"
          :options="[
            {value: 'guests', slot: 'guests'},
            {value: 'principal', slot: 'principal'},
            {value: 'childrens', slot: 'childrens'}
          ]"
          >
          <template v-slot:guests>
            <div class="row items-center no-wrap">
              <div class="text-center">
                Quarto<br>Hospedes
              </div>
              <q-icon right :name="modelRoom == 'guests' ? 'flash_one' : 'flash_off'" />
            </div>
          </template>

          <template v-slot:principal>
            <div class="row items-center no-wrap">
              <div class="text-center">
                Quarto<br>Principal
              </div>
              <q-icon right :name="modelRoom == 'principal' ? 'flash_one' : 'flash_off'" />
            </div>
          </template>

          <template v-slot:childrens>
            <div class="row items-center no-wrap">
              <div class="text-center">
                Quarto<br>Criança
              </div>
              <q-icon right :name="modelRoom == 'childrens' ? 'flash_one' : 'flash_off'" />
            </div>
          </template>
        </q-btn-toggle>
      </q-card-section>
    </q-card>

    <q-card class="bg-custom">
        <q-card-section>
          <div class="text-h6">Escritórios da Casa</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <q-btn-toggle
          v-model="modelHall"
          v-on:click="modelRoomChange"
          push
          rounded
          glossy
          toggle-color="dark"
          :options="[
            {value: 'work', slot: 'work'},
            {value: 'principal', slot: 'principal'},
            {value: 'hall', slot: 'hall'}
          ]"
          >
          <template v-slot:work>
            <div class="row items-center no-wrap">
              <div class="text-center">
                Escritório<br>Trabalho
              </div>
              <q-icon right :name="modelHall == 'work' ? 'flash_one' : 'flash_off'" />
            </div>
          </template>

          <template v-slot:principal>
            <div class="row items-center no-wrap">
              <div class="text-center">
                Escritório<br>Principal
              </div>
              <q-icon right :name="modelHall == 'principal' ? 'flash_one' : 'flash_off'" />
            </div>
          </template>

          <template v-slot:hall>
            <div class="row items-center no-wrap">
              <div class="text-center">
                Sala<br>Estar
              </div>
              <q-icon right :name="modelHall == 'hall' ? 'flash_one' : 'flash_off'" />
            </div>
          </template>
        </q-btn-toggle>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import db from '../handler/firebase.js'

export default {
  name: 'PageIndex',

  data () {
    return {
      modelRoom: 'principal',
      modelHall: 'principal'
    }
  },

  methods: {
    modelRoomChange () {
      console.log('im been here')

      db.collection('pi-home').doc('rpBFRAGWWrvkcHUK36L6')
        .set({
          principal_room: this.modelRoom === 'principal'
        })
    }
  }
}
</script>

<style>
.bg-custom {
  background-color: #cac3c3;
}
</style>
