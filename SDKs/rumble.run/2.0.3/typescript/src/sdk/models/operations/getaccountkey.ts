import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: string;
}


export class GetAccountKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountKeyPathParams;

  @SpeakeasyMetadata()
  security: GetAccountKeySecurity;
}


export class GetAccountKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
