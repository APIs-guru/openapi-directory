import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string[];
}


export class OneannouncementsPostResponses400ContentApplication1jsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors })
  errors: OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors[];
}
