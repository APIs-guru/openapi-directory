import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DomainUserCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=organizationalUnit" })
  organizationalUnit?: string;

  @Metadata({ data: "json, name=passwordSecretIdentifier" })
  passwordSecretIdentifier: string;

  @Metadata({ data: "json, name=userName" })
  userName: string;
}
