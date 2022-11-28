import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiUsagePlansV2Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetApiUsagePlansV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetApiUsagePlansV2Security;
}


export class GetApiUsagePlansV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiUsageList?: shared.ApiUsageList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
