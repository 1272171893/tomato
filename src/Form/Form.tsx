import { defineComponent, PropType } from "vue";
import { Schema } from "../types/types";
import Item from "./Item";
export default defineComponent({
  name: "TsForm",
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onCahnge: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  setup(props, { slots, emit, attrs }) {
    const handleChange = (v: any) => {
      props.onCahnge(v);
    };
    return () => {
      const { schema, value } = props;
      return <Item schema={schema} value={value} onCahnge={handleChange} />;
    };
  },
});
