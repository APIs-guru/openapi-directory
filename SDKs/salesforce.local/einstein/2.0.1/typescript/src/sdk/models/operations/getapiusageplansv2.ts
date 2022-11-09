import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiUsagePlansV2Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetApiUsagePlansV2Request extends SpeakeasyBase {
  @Metadata()
  security: GetApiUsagePlansV2Security;
}


export class GetApiUsagePlansV2Response extends SpeakeasyBase {
  @Metadata()
  apiUsageList?: shared.ApiUsageList;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
