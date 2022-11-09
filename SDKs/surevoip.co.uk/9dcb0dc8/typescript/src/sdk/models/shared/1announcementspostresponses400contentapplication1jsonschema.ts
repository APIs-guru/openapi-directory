import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field: string;

  @Metadata({ data: "json, name=message" })
  message: string[];
}


export class OneannouncementsPostResponses400ContentApplication1jsonSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors })
  errors: OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors[];
}
