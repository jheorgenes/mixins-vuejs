export default {
  data: () => ({
    itens: [],
    item: ''
  }),
  methods: {
    adicionarItem() {
      this.itens.push(this.item);
      this.item = '';
    }
  }
}