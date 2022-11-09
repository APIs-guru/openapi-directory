import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAccountKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class CreateAccountKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ApiKeyOptions;

  @Metadata()
  security: CreateAccountKeySecurity;
}


export class CreateAccountKeyResponse extends SpeakeasyBase {
  @Metadata()
  apiKey?: shared.ApiKey;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
