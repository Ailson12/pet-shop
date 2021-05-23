<template>
    <div>
        <b-row>
            <b-col md="6" lg="4">
                <card-home
                    :total="totalFuncionarios"
                    icone="cil-group"
                    titulo="Total de funcionários cadastrados"
                />
            </b-col>
            <b-col md="6" lg="4">
                <card-home
                    :total="funcionariosMasculino"
                    icone="cil-user"
                    :classCard="['bg-info']"
                    titulo="Funcionários do sexo masculino"
                />
            </b-col>
            <b-col md="6" lg="4">
                <card-home
                    :total="funcionariosFeminino"
                    icone="cil-user-female"
                    :classCard="['bg-danger']"
                    titulo="Funcionários do sexo Feminino"
                />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import CardHome from "./card/CardHome"
export default {
    name: "Home",
    components: {
        CardHome
    },
    data() {
        return {
            totalFuncionarios: 0,
            funcionariosMasculino: 0,
            funcionariosFeminino: 0
        }
    },
    created() {
        this.getTotalFuncionarios("totalFuncionarios");
        this.getTotalFuncionarios("funcionariosMasculino", "M");
        this.getTotalFuncionarios("funcionariosFeminino", "F");
    },
    methods: {
        async getTotalFuncionarios(atributo, sexo = null) {
            try {
                const { data } = await axios.get(`/total-funcionarios${sexo ? "/" + sexo : ''}`);

                if (this[atributo] != undefined) {
                    this[atributo] = data.total;
                }
            } catch ({ response }) {
                this.$toast.error(response?.data?.mensagem ?? "Erro ao realizar operação.", "Erro");
            }
        }
    }
}
</script>