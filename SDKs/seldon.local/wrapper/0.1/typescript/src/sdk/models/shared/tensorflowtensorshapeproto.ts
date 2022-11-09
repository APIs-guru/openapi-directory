import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TensorShapeProtoDim } from "./tensorshapeprotodim";


// TensorflowTensorShapeProto
/** 
 * Dimensions of a tensor.
**/
export class TensorflowTensorShapeProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=dim", elemType: shared.TensorShapeProtoDim })
  dim?: TensorShapeProtoDim[];

  @Metadata({ data: "json, name=unknown_rank" })
  unknownRank?: boolean;
}
