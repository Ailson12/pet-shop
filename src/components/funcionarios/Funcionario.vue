<template>
	<div>
		<div>
			<b-card-group deck>
				<b-card header-tag="header" footer-tag="footer">
					<template #header>
						<h4>Funcionários</h4>
					</template>
					<b-table striped  bordered	hover :fields="cabecalho" :items="funcionarios">
					</b-table>
				</b-card>
			</b-card-group>
		</div>
	</div>
</template>

<script>
export default {
    name: "Funcionario",
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
				console.log("Erro", error);
			}
		}
	}
}
</script>

<style>

</style>