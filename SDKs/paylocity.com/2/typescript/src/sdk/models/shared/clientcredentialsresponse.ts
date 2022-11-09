import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClientCredentialsResponse
/** 
 * The Client Credentials Response Model
**/
export class ClientCredentialsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=clientSecretExpirationDate" })
  clientSecretExpirationDate?: string;
}
