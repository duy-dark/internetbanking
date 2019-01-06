<template>
    <div>
        <div class="title">Danh sách người nhận</div>
        <b-table :data="data" :columns="columns"></b-table>
        <button class="button btnSubmit" @click="submitAdd">Add</button>
        <button class="button btnSubmit" @click="submitDel">Delete</button>
        <button class="button btnSubmit" @click="submitEdit">Edit</button>
        <div v-if="btnAddClicked">
            <b-field label="STK :" :type="{'is-success':addSTK!=='','is-danger':addSTK===''}" :message="{'Please enter a payment account number':addSTK===''}">
                <b-input maxlength="30" v-model="addSTK" icon="account" type="number"></b-input>
            </b-field>
            <b-field label="Name :" :type="{'is-success':addName!=='','is-danger':addName===''}" :message="{'Please enter a name':addName===''}">
                <b-input maxlength="30" v-model="addName" icon="account" ></b-input>
            </b-field>
            <button class="button btnSubmit" @click="Added" :disabled="isFinishForm">Submit</button>
        </div>
        <div v-if="btnDelClicked">
            <b-field label="STK :" :type="{'is-success':delSTK!=='','is-danger':delSTK===''}" :message="{'Please enter a payment account number':delSTK===''}">
                <b-input maxlength="30" v-model="delSTK" icon="account" type="number"></b-input>
            </b-field>
            <button class="button btnSubmit" @click="Deleted" :disabled="isFinishForm">Submit</button>
        </div>
        <div v-if="btnEditClicked">
            <b-field label="STK :" :type="{'is-success':editSTK!=='','is-danger':editSTK===''}" :message="{'Please enter a payment account number':editSTK===''}">
                <b-input maxlength="30" v-model="editSTK" icon="account" type="number"></b-input>
            </b-field>
            <b-field label="New STK :" :type="{'is-success':editNewSTK!=='','is-danger':editNewSTK===''}" :message="{'Please enter a new payment account number':editNewSTK===''}">
                <b-input maxlength="30" v-model="editNewSTK" icon="account" type="number"></b-input>
            </b-field>
            <b-field label="New Name :" :type="{'is-success':editNewName!=='','is-danger':editNewName===''}" :message="{'Please enter a name':editNewName===''}">
                <b-input maxlength="30" v-model="editNewName" icon="account"></b-input>
            </b-field>
            <button class="button btnSubmit" @click="Edited" :disabled="isFinishForm">Submit</button>
        </div>
    </div>
</template>
<script>
export default {

    name: 'closePaymentAccount',

    data() {
        return {
            addSTK: '',
            addName: '',
            delSTK: '',
            editSTK: '',
            editNewSTK:'',
            editNewName: '',
            btnAddClicked: false,
            btnDelClicked: false,
            btnEditClicked: false,
            data: [
                { 'STK': 1, 'TGN': 10000 },
                { 'STK': 2, 'TGN': 10000 },
                { 'STK': 3, 'TGN': 10000 },
                { 'STK': 4, 'TGN': 10000 },
                { 'STK': 5, 'TGN': 10000 }
            ],
            columns: [{
                    field: 'STK',
                    label: 'Số tài khoản',
                    width: '200'
                },
                {
                    field: 'TGN',
                    label: 'Tên gợi nhớ',
                    width: '100'
                }
            ]
        }
    },
    methods: {
        submitAdd() {
            this.btnAddClicked = true;
            this.btnDelClicked = false;
            this.btnEditClicked = false;
        },
        submitDel() {
            this.btnAddClicked = false;
            this.btnDelClicked = true;
            this.btnEditClicked = false;
        },
        submitEdit() {
            this.btnAddClicked = false;
            this.btnDelClicked = false;
            this.btnEditClicked = true;
        },
        Added(){

        },
        Deleted(){

        },
        Edited(){

        }
    },
    computed: {
        isFinishForm:function(){
            if(  this.btnAddClicked === true){
                return this.addSTK===''||this.addName==='';
            }
            if(  this.btnDelClicked === true){
                return this.delSTK==='';
            }
            if(  this.btnEditClicked === true){
                return this.editSTK===''||this.editNewSTK===''||this.editNewName==='';
            }
        }

    }

};
</script>
<style lang="css" scoped>
</style>