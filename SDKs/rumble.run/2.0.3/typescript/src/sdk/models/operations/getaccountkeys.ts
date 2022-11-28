import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetAccountKeysSecurity;
}


export class GetAccountKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ApiKey })
  apiKeys?: shared.ApiKey[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
