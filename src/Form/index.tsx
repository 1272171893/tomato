import { defineComponent, PropType } from "vue";
import { Schema } from "../types/types";
export default defineComponent({
  name: "TsForm",
  props: {
    schema: {
      type: Object as PropType<Schema>,
    },
  },
  setup(props, { slots, emit, attrs }) {
    return () => {
      return <div>this is a form</div>;
    };
  },
});
