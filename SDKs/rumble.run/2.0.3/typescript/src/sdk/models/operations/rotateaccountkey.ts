import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RotateAccountKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: string;
}


export class RotateAccountKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RotateAccountKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RotateAccountKeyPathParams;

  @Metadata()
  security: RotateAccountKeySecurity;
}


export class RotateAccountKeyResponse extends SpeakeasyBase {
  @Metadata()
  apiKey?: shared.ApiKey;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
