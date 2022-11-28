import { SpeakeasyBase } from "../../../internal/utils";
import { TensorflowTensorProto } from "./tensorflowtensorproto";
/**
 * Protocol buffer representing the serialization format of DT_VARIANT tensors.
**/
export declare class TensorflowVariantTensorDataProto extends SpeakeasyBase {
    metadata?: string;
    tensors?: TensorflowTensorProto[];
    typeName?: string;
}
