import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RotateKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RotateKeyRequest extends SpeakeasyBase {
  @Metadata()
  security: RotateKeySecurity;
}


export class RotateKeyResponse extends SpeakeasyBase {
  @Metadata()
  apiKey?: shared.ApiKey;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
