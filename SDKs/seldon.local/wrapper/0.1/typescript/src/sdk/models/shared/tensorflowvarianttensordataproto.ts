import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TensorflowTensorProto } from "./tensorflowtensorproto";



// TensorflowVariantTensorDataProto
/** 
 * Protocol buffer representing the serialization format of DT_VARIANT tensors.
**/
export class TensorflowVariantTensorDataProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "json, name=tensors", elemType: TensorflowTensorProto })
  tensors?: TensorflowTensorProto[];

  @SpeakeasyMetadata({ data: "json, name=type_name" })
  typeName?: string;
}
