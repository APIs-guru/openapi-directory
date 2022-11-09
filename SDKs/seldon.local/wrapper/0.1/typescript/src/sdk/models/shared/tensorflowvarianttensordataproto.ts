import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TensorflowTensorProto } from "./tensorflowtensorproto";


// TensorflowVariantTensorDataProto
/** 
 * Protocol buffer representing the serialization format of DT_VARIANT tensors.
**/
export class TensorflowVariantTensorDataProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: string;

  @Metadata({ data: "json, name=tensors", elemType: shared.TensorflowTensorProto })
  tensors?: TensorflowTensorProto[];

  @Metadata({ data: "json, name=type_name" })
  typeName?: string;
}
