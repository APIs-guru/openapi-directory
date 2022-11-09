import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveAccountCredentialPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=credential_id" })
  credentialId: string;
}


export class RemoveAccountCredentialSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RemoveAccountCredentialRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveAccountCredentialPathParams;

  @Metadata()
  security: RemoveAccountCredentialSecurity;
}


export class RemoveAccountCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
