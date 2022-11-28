import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimplifiedShowObject } from "./simplifiedshowobject";



export class ShowsObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shows", elemType: SimplifiedShowObject })
  shows?: SimplifiedShowObject[];
}
