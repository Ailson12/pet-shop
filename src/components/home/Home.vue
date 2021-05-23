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

        <b-row>
            <b-col lg="6">
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