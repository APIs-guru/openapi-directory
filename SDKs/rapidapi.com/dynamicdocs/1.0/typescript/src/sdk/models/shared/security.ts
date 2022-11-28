import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeAdvSecurityToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=ADVICEment API Key" })
  apiKey: string;
}


export class SchemeXRapidApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=RapidAPI.com API Key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  advSecurityToken?: SchemeAdvSecurityToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xRapidApiKey?: SchemeXRapidApiKey;
}
