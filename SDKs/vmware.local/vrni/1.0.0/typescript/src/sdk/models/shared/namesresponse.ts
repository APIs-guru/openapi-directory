import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityName } from "./entityname";



export class NamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: EntityName })
  entities?: EntityName[];
}
