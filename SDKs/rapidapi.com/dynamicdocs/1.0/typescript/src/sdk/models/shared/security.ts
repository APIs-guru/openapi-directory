import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeAdvSecurityToken extends SpeakeasyBase {
  @Metadata({ data: "security, name=ADVICEment API Key" })
  apiKey: string;
}


export class SchemeXRapidApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=RapidAPI.com API Key" })
  apiKey: string;
}


export class SecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  advSecurityToken: SchemeAdvSecurityToken;
}


export class SecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xRapidApiKey: SchemeXRapidApiKey;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SecurityOption2;
}
