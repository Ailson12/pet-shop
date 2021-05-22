<template>
    <div>
        <b-modal
            id="funcionario-modal"
            title="Cadastro de Funcionário"
            ok-title="Salvar"
            cancel-title="Cancelar"
            size="lg"
            @ok.prevent="salvar"
        >
        <load :load="load"/>
            <form ref="form" autocomplete="off">
                <b-row>
                    <b-col cols="12">
                        <b-form-group
                            label="Nome"
                            label-for="nome"
                        >
                            <b-form-input
                                id="nome"
                                type="text"
                                placeholder="Nome"
                                required
                                v-model="campos.nome"
                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols=6>
                        <b-form-group
                            label="Data de Nascimento"
                            label-for="data_nascimento"
                        >
                            <b-form-input
                                id="data_nascimento"
                                type="date"
                                placeholder="Data de nascimento"
                                required
                                v-model="campos.data_nascimento"
                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols=6>
                        <b-form-group
                            label="Sexo"
                            label-for="sexo"
                        >
                            <b-form-select id="sexo" v-model="campos.sexo" :options="opcoesSexo" />
                        </b-form-group>
                    </b-col>

                    <b-col cols="6">
                        <b-form-group
                            label="Setor"
                            label-for="setor"
                        >
                            <b-form-select id="setor" :options="opcoesSetor" v-model="campos.setor" />
                        </b-form-group>
                    </b-col>
                </b-row>
            </form>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "FuncionarioModal",
    data() {
        return {
            load: false,
            campos: {},
            opcoesSexo: [
                {value: "M", text: "Masculino"},
                {value: "F", text: "Feminino"}
            ],
            opcoesSetor: [
                {value: "VE", text: "Vendas"},
                {value: "AD", text: "Administração"},
                {value: "ES", text: "Controle de Estoque"},
            ]
        }
    },
    methods: {
        async salvar() {
            this.load = true;
            try {
                const { data } = await axios.post("/funcionarios", this.campos);
		        this.$toast.success(data?.mensagem ?? "Operação realizada com sucesso!", "Sucesso!");
                this.$emit("salvar", true);
            } catch ({ response }) {
                this.$toast.error(response?.data?.mensagem ?? "Erro ao realizar operação!", "Erro");
            } finally {
                this.campos = {};
                 this.load = false;
                this.$bvModal.hide("funcionario-modal")
            }
        }
    }
}
</script>