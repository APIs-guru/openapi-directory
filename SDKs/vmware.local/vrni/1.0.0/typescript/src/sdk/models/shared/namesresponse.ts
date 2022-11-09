import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityName } from "./entityname";


export class NamesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.EntityName })
  entities?: EntityName[];
}
