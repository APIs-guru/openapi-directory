import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RemoveKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: RemoveKeySecurity;
}


export class RemoveKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
