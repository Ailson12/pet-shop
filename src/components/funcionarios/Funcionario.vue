<template>
	<div>
		<h4 class="mb-4">Funcionários</h4>
		<b-card-group deck>
			<b-card header-tag="header" footer-tag="footer">
				<template #header>
					<b-button @click="cadastrar('funcionario-modal')" variant="primary">Adicionar <i class="cil-user-plus"></i></b-button>
				</template>
				<b-table striped  bordered	hover :fields="cabecalho" :items="funcionarios" />
			</b-card>
		</b-card-group>

		<funcionario-modal
			@salvar="getFuncionarios" 
		/>
	</div>
</template>

<script>
import FuncionarioModal from "./form/FuncionarioModal"
export default {
    name: "Funcionario",
	components: {
		FuncionarioModal
	},
	data() {
		return {
			cabecalho: [
				{
					key: "nome",
					label: "Nome"
				},
				{
					key: "data_nascimento",
					label: "Data de nascimento"
				},
					{
					key: "setor",
					label: "Setor"
				},
					{
					key: "sexo",
					label: "Sexo"
				}
			],
			funcionarios: []
		}
	},
	created() {
		this.getFuncionarios();
	},
	methods: {
		async getFuncionarios() {
			try {
				const { data } = await axios.get("/funcionarios");
				this.funcionarios = data.dados;
			} catch (error) {
				this.$toast.error(response?.data?.mensagem ?? "Erro ao listar funcionários!", "Erro");
			}
		},
		cadastrar(modalId) {
			this.$bvModal.show(modalId)
		}
	}
}
</script>