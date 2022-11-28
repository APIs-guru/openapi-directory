import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TensorflowDataTypeEnum } from "./tensorflowdatatypeenum";
import { TensorflowResourceHandleProto } from "./tensorflowresourcehandleproto";
import { TensorflowTensorShapeProto } from "./tensorflowtensorshapeproto";
import { TensorflowVariantTensorDataProto } from "./tensorflowvarianttensordataproto";



// TensorflowTensorProto
/** 
 * Protocol buffer representing a tensor.
**/
export class TensorflowTensorProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bool_val" })
  boolVal?: boolean[];

  @SpeakeasyMetadata({ data: "json, name=dcomplex_val" })
  dcomplexVal?: number[];

  @SpeakeasyMetadata({ data: "json, name=double_val" })
  doubleVal?: number[];

  @SpeakeasyMetadata({ data: "json, name=dtype" })
  dtype?: TensorflowDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=float_val" })
  floatVal?: number[];

  @SpeakeasyMetadata({ data: "json, name=half_val" })
  halfVal?: number[];

  @SpeakeasyMetadata({ data: "json, name=int64_val" })
  int64Val?: string[];

  @SpeakeasyMetadata({ data: "json, name=int_val" })
  intVal?: number[];

  @SpeakeasyMetadata({ data: "json, name=resource_handle_val", elemType: TensorflowResourceHandleProto })
  resourceHandleVal?: TensorflowResourceHandleProto[];

  @SpeakeasyMetadata({ data: "json, name=scomplex_val" })
  scomplexVal?: number[];

  @SpeakeasyMetadata({ data: "json, name=string_val" })
  stringVal?: string[];

  @SpeakeasyMetadata({ data: "json, name=tensor_content" })
  tensorContent?: string;

  @SpeakeasyMetadata({ data: "json, name=tensor_shape" })
  tensorShape?: TensorflowTensorShapeProto;

  @SpeakeasyMetadata({ data: "json, name=uint32_val" })
  uint32Val?: number[];

  @SpeakeasyMetadata({ data: "json, name=uint64_val" })
  uint64Val?: string[];

  @SpeakeasyMetadata({ data: "json, name=variant_val", elemType: TensorflowVariantTensorDataProto })
  variantVal?: TensorflowVariantTensorDataProto[];

  @SpeakeasyMetadata({ data: "json, name=version_number" })
  versionNumber?: number;
}
