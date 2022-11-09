import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=app_key" })
  apiKey: string;
}


export class SchemeAppId extends SpeakeasyBase {
  @Metadata({ data: "security, name=app_id" })
  apiKey: string;
}
