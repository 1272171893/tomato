import { defineComponent, PropType } from "vue";
import { Schema, SchemaTypes } from "../types/types";
import NumberLib from "./libs/NumberLib";
import StringLib from "./libs/StringLib";
export default defineComponent({
  name: "TsItem",
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
    return () => {
      const schema = props.schema;
      const type = schema?.type;
      let Component: any;
      switch (type) {
        case SchemaTypes.STRING:
          Component = StringLib;
          break;
        case SchemaTypes.NUMBER:
          Component = NumberLib;
          break;
        default:
          console.warn(`${type} is not supported`);
      }
      return <Component {...props} />;
    };
  },
});
