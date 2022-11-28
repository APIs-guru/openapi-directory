import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";



export class MicroSecGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: Reference;
}
