import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RotateKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RotateKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: RotateKeySecurity;
}


export class RotateKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKey?: shared.ApiKey;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
