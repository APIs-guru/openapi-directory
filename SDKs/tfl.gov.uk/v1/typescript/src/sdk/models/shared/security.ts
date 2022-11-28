import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=app_key" })
  apiKey: string;
}


export class SchemeAppId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=app_id" })
  apiKey: string;
}
