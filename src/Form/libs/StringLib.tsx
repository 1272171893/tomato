import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "StringLib",
  setup(props, { slots, emit, attrs }) {
    return () => {
        return <input type="text" />;
    };
  },
});
