import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Reference } from "./reference";


export class MicroSecGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity" })
  entity?: Reference;
}
