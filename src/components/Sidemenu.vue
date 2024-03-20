<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMagnify } from '@mdi/js';
import { mdiHome } from '@mdi/js';
import { mdiCalendarMonth } from '@mdi/js';
import { mdiTelevision } from '@mdi/js';
import { mdiMovieOpen } from '@mdi/js';
import { mdiPlus } from '@mdi/js';
</script>

<template>
    <div id="SideNav" class="fixed w-[140px]  h-[100vh] flex flex-col  p-12  border-r border-r-[#32323D]  ">
            <SvgIcon type="mdi" :path="mdiMagnify" class="w-8 h-8  text-white mt-8 mb-14 " />
            <SvgIcon type="mdi" :path="mdiHome" class="w-8 h-8 text-white mb-14 " />
            <SvgIcon type="mdi" :path="mdiCalendarMonth" class="w-8 h-8 text-white  mb-14 " />
            <SvgIcon type="mdi" :path="mdiTelevision" class="w-8 h-8 text-white  mb-14 " />
            <SvgIcon type="mdi" :path="mdiMovieOpen" class="w-8 h-8 text-white  mb-14 " />
            <SvgIcon type="mdi" :path="mdiPlus" class="w-8 h-8 text-white  mb-14 " />
        
            
        
    </div>
  </template>