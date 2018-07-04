<template>
        <button :type="type" @click="event()" class="btn" :class="Style">{{this.title}}</button>
</template>

<script>
export default {

    props:{
        type:{
            type:String,
            required:true
        },
        title: {
            type:String,
            required:true
        },
        msgConfirm: Boolean,
        phStyle: String
    },
    computed:{
        Style(){
            switch(this.phStyle){
                case 'danger':
                    return 'btn-danger';
                break;
                case 'warning':
                 return 'btn-warning';
                break;
                case 'primary':
                 return 'btn-primary';
                break;
                case 'success':
                 return 'btn-success';
                break;
            }
        }
    },
    methods:{
        event(){
            if(this.msgConfirm){
                if(confirm("Confirma realizar operação?")){
                    this.$emit('eventClick');
                    return;
                }
            }
             this.$emit('eventClick');
        }
    }
};
</script>

<style>
</style>
