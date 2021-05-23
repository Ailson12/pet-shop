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

        <b-row class="mt-3">
            <b-col lg="6" md="12">
                <div class=card>
                    <div class="card-header">
                        <h5 class="card-title">Funcionários por Gênero</h5>
                    </div>
                    <div class="card-body">
                    <chart-pie
                        :datasets="[
                            {
                                data: [funcionariosMasculino, funcionariosFeminino],
                                backgroundColor: ['#321fdb', '#e55353']
                            }
                        ]"
                        :options="options"
                        :labels="['Homens', 'Mulheres']"
                    />
                    </div>
                </div>
            </b-col>
            <b-col lg=6 md="12">
                <div class=card>
                    <div class="card-header">
                        <h5 class="card-title">Funcionários por Setor</h5>
                    </div>
                    <div class="card-body">
                    <chart-pie
                        :datasets="[
                            {
                                data: dadosSetoresFuncionarios,
                                backgroundColor: ['#321fdb', '#e55353', '#39f']
                            }
                        ]"
                        :labels="labelSetoresFuncionarios"
                    />
                    </div>
                </div>
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
            funcionariosFeminino: 0,
            dadosSetoresFuncionarios: [],
            labelSetoresFuncionarios: [],
            options: {
                tooltips: {
                    callbacks: {
                        label(tooltipItem, data) {
                            const dataset = data.datasets[tooltipItem.datasetIndex];
                            const total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                                return previousValue + currentValue;
                            });

                            const tooltipoLabel = data.labels[tooltipItem.index];
                            const currentValue = dataset.data[tooltipItem.index];
                            const porcentagem = Math.floor(((currentValue/total) * 100)+0.5);   

                            return `${tooltipoLabel}: ${porcentagem}%`;
                        }
                    }
                }
            }
        }
    },
    created() {
        this.getTotalFuncionarios("totalFuncionarios");
        this.getTotalFuncionarios("funcionariosMasculino", "M");
        this.getTotalFuncionarios("funcionariosFeminino", "F");

        this.getSetorFuncionarios();
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
        },
        async getSetorFuncionarios() {
            try {
                const { data } = await axios.get("/setores-funcionario");
                const result = data[0];

                if (result) {
                    const dados = result.map((item) => item.total);
                    this.dadosSetoresFuncionarios = dados;

                    const setores = result.map((item) => item.setor);
                    this.labelSetoresFuncionarios = setores;
                }
            } catch ({ response }) {
                this.$toast.error(response?.data?.mensagem ?? "Erro ao obter setores dos funcionários", "Erro");
            }
        }
    }
}
</script>