import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DomainUserCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=organizationalUnit" })
  organizationalUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=passwordSecretIdentifier" })
  passwordSecretIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName: string;
}
