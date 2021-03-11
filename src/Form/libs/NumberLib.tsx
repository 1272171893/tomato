import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "NumberLib",
  setup(props, { slots, emit, attrs }) {
    return () => {
        return <input type="text" />;
    };
  },
});
