<template>
    <div>
        <b-modal
            id="funcionario-modal"
            title="Cadastro de Funcionário"
            ok-title="Salvar"
            cancel-title="Cancelar"
            size="lg"
            @ok.prevent="validarCampos"
            @cancel="reset"
        >
        <load :load="load"/>
            <form ref="form" autocomplete="off">
                <b-row>
                    <b-col lg="12">
                        <b-form-group>
                            <template v-slot:label>
                                <label for="nome">Nome <span class="text-danger">*</span></label>
                            </template>
                            <b-form-input
                                id="nome"
                                type="text"
                                placeholder="Nome"
                                required
                                v-model="campos.nome"
                            />
                        </b-form-group>
                    </b-col>
                    <b-col lg="6" md="12">
                        <b-form-group>
                            <template v-slot:label>
                                <label for="data_nascimento">Data de Nascimento <span class="text-danger">*</span></label>
                            </template>

                            <b-form-input
                                id="data_nascimento"
                                type="date"
                                placeholder="Data de nascimento"
                                required
                                v-model="campos.data_nascimento"
                            />
                        </b-form-group>
                    </b-col>
                    <b-col lg="6" md="12">
                        <b-form-group>
                            <template v-slot:label>
                                <label for="sexo">Sexo <span class="text-danger">*</span></label>
                            </template>
                            <b-form-select id="sexo" required v-model="campos.sexo" :options="opcoesSexo" />
                        </b-form-group>
                    </b-col>

                    <b-col lg="6" md="12">
                        <b-form-group>
                            <template v-slot:label>
                                <label for="setor">Setor <span class="text-danger">*</span></label>
                            </template>
                            <b-form-select id="setor" required :options="opcoesSetor" v-model="campos.setor" />
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
    props: {
        funcionario: {
            type: Object,
            required: false,
            default: {}
        }
    },
    data() {
        return {
            load: false,
            teste: "teste",
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
        validarCampos() {
            if (this.$refs.form.checkValidity())
                this.salvar();
            else
                this.$toast.warning("Há campos inválidos", "Atenção!");
        },
        async salvar() {
            this.load = true;
            try {
                const url = this.funcionario.id ? `/funcionarios/${this.funcionario.id}` : "/funcionarios";
                const { data } = await axios({ url: url, method: this.funcionario.id ? "PUT" : "POST", data: this.campos});

		        this.$toast.success(data?.mensagem ?? "Operação realizada com sucesso!", "Sucesso!");
                this.$emit("salvar", true);
            } catch ({ response }) {
                this.$toast.error(response?.data?.mensagem ?? "Erro ao realizar operação!", "Erro");
            } finally {
                this.reset();
                this.load = false;
                this.$bvModal.hide("funcionario-modal")
            }
        },
        reset() {
            this.campos = {}
        }
    },
    watch: {
        funcionario(valor) {
            this.campos = valor;
        }
    }
}
</script>