import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountKeysRequest extends SpeakeasyBase {
  @Metadata()
  security: GetAccountKeysSecurity;
}


export class GetAccountKeysResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ApiKey })
  apiKeys?: shared.ApiKey[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
