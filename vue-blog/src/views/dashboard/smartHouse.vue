<template>
    <div class="smart_house pb-5">
        <v-row>
            <v-col cols="12" sm="3" class="px-sm-1 px-3 py-1 py-sm-3">
                <Device v-model="widgets.wifi" title="5G WI-FI" icon="mdi-wifi" :toolw="false" />
                <Device v-model="widgets.tv" class="my-4" title="Apple TV" icon="mdi-television" />
                <Device v-model="widgets.ts" title="Air Conditioner" icon="mdi-snowflake" />
            </v-col>

            <v-col cols="12" sm="3"> <AirConditioner /></v-col>
            <v-col cols="12" sm="6" class="px-sm-1 px-3 py-1 py-sm-3">
                <EnergyUsed height="100%" />
            </v-col>
            <v-col cols="12" sm="12" class="py-1">
                <v-row>
                    <v-col cols="12" sm="5">
                        <v-card>
                            <div class="d-flex justify-space-between">
                                <v-avatar size="120" rounded="0" class="ma-4">
                                    <img src="../../assets/cloud.png" height="120" />
                                </v-avatar>
                                <div style="flex: 1; text-align: right">
                                    <v-card-title class="text-h5">
                                        ShenZhen <v-icon icon="mdi-map-marker-outline" size="24" />
                                    </v-card-title>

                                    <v-card-subtitle class="">Cloudy To Clear</v-card-subtitle>

                                    <div class="py-0 mr-4">
                                        <span class="text-h3">26&deg;</span
                                        ><span class="text-h6">C</span>
                                    </div>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="7" class="px-1 sm_item_ sm_pt_1"><MusicCard /></v-col>
                    <v-col cols="12" sm="3" class="py-1 pr-1 sm_item_">
                        <Device
                            v-model="widgets.cctv"
                            title="Camera CCTV"
                            :imgSrc="imgcctv"
                            dev-model="Google Camera - X2"
                        />
                    </v-col>
                    <v-col cols="12" sm="3" class="py-1 pr-1 sm_item_">
                        <Device
                            v-model="widgets.speaker"
                            title="Speaker"
                            :imgSrc="imgspeaker"
                            dev-model="Google Speaker - A2"
                        />
                    </v-col>
                    <v-col cols="12" sm="3" class="py-1 pr-1 sm_item_">
                        <Device
                            v-model="widgets.thermostat"
                            title="Thermostat"
                            :imgSrc="imgthermostat"
                            dev-model="Google Thermostat"
                        />
                    </v-col>
                    <v-col cols="12" sm="3" class="py-1 pr-1 sm_item_">
                        <Device
                            v-model="widgets.humidifier"
                            title="Humidifier"
                            :imgSrc="imghumidifier"
                            dev-model="Xiaomi Mi - X500"
                        />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref, onBeforeMount } from 'vue';
import Vr360 from './widgets/Vr360.vue';
import Device from './widgets/Device.vue';
import MusicCard from './widgets/MusicCard.vue';
import AirConditioner from './widgets/AirConditioner.vue';
import EnergyUsed from './widgets/EnergyUsed.vue';
import imgcctv from '../../assets/device/cctv.png';
import imgthermostat from '../../assets/device/thermostat.png';
import imgspeaker from '../../assets/device/speaker.png';
import imghumidifier from '../../assets/device/humidifier.png';

import { read60s } from '@/request/api/open';
const tab = ref(1);
const widgets = reactive({
    wifi: true,
    tv: false,
    ts: true,
    cctv: true,
    speaker: false,
    thermostat: true,
    humidifier: false,
    air: 24,
});

const obj = {
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    0: '日',
};

const curDayData = ref(null);
async function read60sData() {
    const { data, code } = await read60s({ mode: 'api' });
    if (code === 200) {
        curDayData.value = data?.data;
    }
}
onBeforeMount(() => {
    read60sData();
});
</script>
<style lang="scss">
.smart_house {
    .v-card {
        border-radius: 6px;
    }
    .camera_wrap {
        position: relative;
        border-radius: 6px;
        overflow: hidden;
        height: 365px;
        .label {
            line-height: 25px;
            padding: 0 6px;
            background: rgba(0, 0, 0, 0.2);
            position: absolute;
            left: 16px;
            top: 16px;
            color: rgba(255, 255, 255, 0.8);
            border-radius: 2px;
            span {
                display: inline-block;
                width: 10px;
                height: 10px;
                background: red;
                border-radius: 5px;
            }
        }
        .label.lk {
            left: auto;
            right: 16px;
        }
    }
}
.mobile {
    .px-sm-3 {
        padding-right: 12px !important;
        padding-left: 12px !important;
    }
    .py-sm-1 {
        padding-top: 4px !important;
        padding-bottom: 4px !important;
    }
    .py1_no {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }
    .sm_item_ {
        padding: 16px 12px 0 12px !important;
    }
    .sm_pt_1 {
        padding-top: 4px !important;
    }
    .music_card {
        // padding: ;
        .music_wrap {
            display: block;
            .zjbg {
                width: 180px;
            }
            .slider {
                margin-left: 0;
            }
        }
    }
}
</style>
