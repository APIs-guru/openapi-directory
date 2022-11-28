import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveAccountCredentialPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credential_id" })
  credentialId: string;
}


export class RemoveAccountCredentialSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RemoveAccountCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveAccountCredentialPathParams;

  @SpeakeasyMetadata()
  security: RemoveAccountCredentialSecurity;
}


export class RemoveAccountCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
