export default {
    methods: {
        setData(valor) {
            if (valor) {
                const ano = valor.substring(0, 4)
                const mes = valor.substring(5, 7);
                const dia =  valor.substring(8, 10);

                return `${ano}-${mes}-${dia}`;
            }
        }
    }
}