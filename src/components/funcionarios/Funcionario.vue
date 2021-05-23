<template>
	<div>
		<h4 class="mb-4">Funcionários</h4>
		<b-card-group deck>
			<b-card header-tag="header" footer-tag="footer">
				<template #header>
					<b-button @click="openModal('funcionario-modal')" variant="primary">Adicionar <i class="cil-user-plus"></i></b-button>
				</template>
				<load :load="load"/>
				<b-table striped  bordered responsive hover :fields="cabecalho" :items="funcionarios">
				 	<template #cell(id)="{ item }">
						 <b-dropdown text="Ações" variant="primary">
							<b-dropdown-item @click="getFuncionarioById(item.id)">
								<i class="mr-2 cil-pencil"></i> Editar
							</b-dropdown-item>
							<b-dropdown-item @click="deletarFuncionario(item.id)">
								<i class="mr-2 cil-trash"></i> Deletar
							</b-dropdown-item>
						</b-dropdown>
					</template>
				</b-table>
			</b-card>
		</b-card-group>

		<funcionario-modal
			@salvar="getFuncionarios" 
			:funcionario="funcionario"
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
			funcionario: {},
			cabecalho: [
				{
					key: "id",
					label: "Ações"
				},
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
			funcionarios: [],
			load: true
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
			} finally {
				this.load = false;
			}
		},
		openModal(modalId) {
			this.$bvModal.show(modalId)
		},
		async getFuncionarioById(id) {
			try {
				const { data } = await axios.get(`/funcionarios/${id}/edit`);
				this.funcionario = data.funcionario;
				this.openModal("funcionario-modal");
			} catch (error) {
				this.$toast.error(response?.data?.mensagem ?? "Erro ao recuperar funcionário!", "Erro");
			}
		},
		deletarFuncionario(id) {
			try {
				this.$toast.question("Deseja deletar este funcionário ?", "Atenção", {
					position: "center",
					timeout: 4500,
					buttons: [
						[
							"<button>Sim</button>",
							async (instance, toast) => {
								const { data } = await axios.delete(`/funcionarios/${id}`);
								this.$toast.success(data?.mensagem ?? "Funcionário deletado com sucesso!");
								this.getFuncionarios();
								instance.hide({ transitionOut: "fadeOut" }, toast, "button");
							}
						],
						[
							"<button>Não</button>",
							(instance, toast) => {
								instance.hide({ transitionOut: "fadeOut" }, toast, "button");
							}
						]
					]
				});
			} catch ({ response }) {
				this.$toast.error(response?.data?.mensagem ?? "Erro ao deletar funcionário!", "Erro");
			}
		}
	}
}
</script>