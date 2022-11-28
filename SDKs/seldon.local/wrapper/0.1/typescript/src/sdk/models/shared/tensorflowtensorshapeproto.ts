import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TensorShapeProtoDim } from "./tensorshapeprotodim";



// TensorflowTensorShapeProto
/** 
 * Dimensions of a tensor.
**/
export class TensorflowTensorShapeProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dim", elemType: TensorShapeProtoDim })
  dim?: TensorShapeProtoDim[];

  @SpeakeasyMetadata({ data: "json, name=unknown_rank" })
  unknownRank?: boolean;
}
