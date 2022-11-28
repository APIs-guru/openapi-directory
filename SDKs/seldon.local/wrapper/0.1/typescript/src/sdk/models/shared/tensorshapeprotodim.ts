import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TensorShapeProtoDim
/** 
 * One dimension of the tensor.
**/
export class TensorShapeProtoDim extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;
}
