import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountCredentialPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credential_id" })
  credentialId: string;
}


export class GetAccountCredentialSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountCredentialPathParams;

  @SpeakeasyMetadata()
  security: GetAccountCredentialSecurity;
}


export class GetAccountCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  credential?: shared.Credential;

  @SpeakeasyMetadata()
  statusCode: number;
}
