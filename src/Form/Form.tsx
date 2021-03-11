import { defineComponent, PropType } from "vue";
import { Schema, SchemaTypes } from "../types/types";
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
    },
  },
  setup(props, { slots, emit, attrs }) {
    return () => {
      const schema = props.schema;
      const type = schema?.type;
      switch (type) {
        case SchemaTypes.STRING: {
          return <input type="text" />;
        }
      }
    };
  },
});
