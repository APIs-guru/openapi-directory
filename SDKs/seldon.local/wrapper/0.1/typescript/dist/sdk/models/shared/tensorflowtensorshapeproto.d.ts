import { SpeakeasyBase } from "../../../internal/utils";
import { TensorShapeProtoDim } from "./tensorshapeprotodim";
/**
 * Dimensions of a tensor.
**/
export declare class TensorflowTensorShapeProto extends SpeakeasyBase {
    dim?: TensorShapeProtoDim[];
    unknownRank?: boolean;
}
