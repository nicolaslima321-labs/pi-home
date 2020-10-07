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
          push
          rounded
          glossy
          toggle-color="dark"
          :options="[
            {value: 'one', slot: 'one'},
            {value: 'two', slot: 'two'},
            {value: 'three', slot: 'three'}
          ]"
          >
          <template v-slot:one>
            <div class="row items-center no-wrap">
              <div class="text-center">
                Quarto<br>Hospedes
              </div>
              <q-icon right :name="modelRoom == 'one' ? 'flash_one' : 'flash_off'" />
            </div>
          </template>

          <template v-slot:two>
            <div class="row items-center no-wrap">
              <div class="text-center">
                Quarto<br>Principal
              </div>
              <q-icon right :name="modelRoom == 'two' ? 'flash_one' : 'flash_off'" />
            </div>
          </template>

          <template v-slot:three>
            <div class="row items-center no-wrap">
              <div class="text-center">
                Quarto<br>Criança
              </div>
              <q-icon right :name="modelRoom == 'three' ? 'flash_one' : 'flash_off'" />
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
          push
          rounded
          glossy
          toggle-color="dark"
          :options="[
            {value: 'one', slot: 'one'},
            {value: 'two', slot: 'two'},
            {value: 'three', slot: 'three'}
          ]"
          >
          <template v-slot:one>
            <div class="row items-center no-wrap">
              <div class="text-center">
                Escritório<br>Trabalho
              </div>
              <q-icon right :name="modelHall == 'one' ? 'flash_one' : 'flash_off'" />
            </div>
          </template>

          <template v-slot:two>
            <div class="row items-center no-wrap">
              <div class="text-center">
                Escritório<br>Principal
              </div>
              <q-icon right :name="modelHall == 'two' ? 'flash_one' : 'flash_off'" />
            </div>
          </template>

          <template v-slot:three>
            <div class="row items-center no-wrap">
              <div class="text-center">
                Sala<br>Estar
              </div>
              <q-icon right :name="modelHall == 'three' ? 'flash_one' : 'flash_off'" />
            </div>
          </template>
        </q-btn-toggle>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      modelRoom: 'two',
      modelHall: 'two'
    }
  }
}
</script>

<style>
.bg-custom {
  background-color: #cac3c3;
}
</style>
