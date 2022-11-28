import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClientCredentialsResponse
/** 
 * The Client Credentials Response Model
**/
export class ClientCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecretExpirationDate" })
  clientSecretExpirationDate?: string;
}
