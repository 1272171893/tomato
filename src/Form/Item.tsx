import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "TsItem",
  props: {},
  setup(props, { slots, emit, attrs }) {
    return () => {
      return <input type="text" />;
    };
  },
});
