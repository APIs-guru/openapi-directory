import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountCredentialPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=credential_id" })
  credentialId: string;
}


export class GetAccountCredentialSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountCredentialRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountCredentialPathParams;

  @Metadata()
  security: GetAccountCredentialSecurity;
}


export class GetAccountCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  credential?: shared.Credential;

  @Metadata()
  statusCode: number;
}
