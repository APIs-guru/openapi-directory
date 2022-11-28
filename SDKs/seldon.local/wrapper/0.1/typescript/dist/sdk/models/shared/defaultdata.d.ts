import { SpeakeasyBase } from "../../../internal/utils";
import { Tensor } from "./tensor";
import { TensorflowTensorProto } from "./tensorflowtensorproto";
export declare class DefaultData extends SpeakeasyBase {
    names?: string[];
    ndarry?: any[];
    tensor?: Tensor;
    tftensor?: TensorflowTensorProto;
}
