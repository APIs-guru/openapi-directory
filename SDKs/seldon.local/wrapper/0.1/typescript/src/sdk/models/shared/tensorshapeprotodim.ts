import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TensorShapeProtoDim
/** 
 * One dimension of the tensor.
**/
export class TensorShapeProtoDim extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;
}
