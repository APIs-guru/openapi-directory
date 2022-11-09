import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TensorflowDataTypeEnum } from "./tensorflowdatatypeenum";
import { TensorflowResourceHandleProto } from "./tensorflowresourcehandleproto";
import { TensorflowTensorShapeProto } from "./tensorflowtensorshapeproto";
import { TensorflowVariantTensorDataProto } from "./tensorflowvarianttensordataproto";


// TensorflowTensorProto
/** 
 * Protocol buffer representing a tensor.
**/
export class TensorflowTensorProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=bool_val" })
  boolVal?: boolean[];

  @Metadata({ data: "json, name=dcomplex_val" })
  dcomplexVal?: number[];

  @Metadata({ data: "json, name=double_val" })
  doubleVal?: number[];

  @Metadata({ data: "json, name=dtype" })
  dtype?: TensorflowDataTypeEnum;

  @Metadata({ data: "json, name=float_val" })
  floatVal?: number[];

  @Metadata({ data: "json, name=half_val" })
  halfVal?: number[];

  @Metadata({ data: "json, name=int64_val" })
  int64Val?: string[];

  @Metadata({ data: "json, name=int_val" })
  intVal?: number[];

  @Metadata({ data: "json, name=resource_handle_val", elemType: shared.TensorflowResourceHandleProto })
  resourceHandleVal?: TensorflowResourceHandleProto[];

  @Metadata({ data: "json, name=scomplex_val" })
  scomplexVal?: number[];

  @Metadata({ data: "json, name=string_val" })
  stringVal?: string[];

  @Metadata({ data: "json, name=tensor_content" })
  tensorContent?: string;

  @Metadata({ data: "json, name=tensor_shape" })
  tensorShape?: TensorflowTensorShapeProto;

  @Metadata({ data: "json, name=uint32_val" })
  uint32Val?: number[];

  @Metadata({ data: "json, name=uint64_val" })
  uint64Val?: string[];

  @Metadata({ data: "json, name=variant_val", elemType: shared.TensorflowVariantTensorDataProto })
  variantVal?: TensorflowVariantTensorDataProto[];

  @Metadata({ data: "json, name=version_number" })
  versionNumber?: number;
}
