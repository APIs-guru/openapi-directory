import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimplifiedShowObject } from "./simplifiedshowobject";


export class ShowsObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=shows", elemType: shared.SimplifiedShowObject })
  shows?: SimplifiedShowObject[];
}
