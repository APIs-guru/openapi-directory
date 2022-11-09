import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPanoramaFirewallsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListPanoramaFirewallsRequest extends SpeakeasyBase {
  @Metadata()
  security: ListPanoramaFirewallsSecurity;
}


export class ListPanoramaFirewallsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataSourceListResponse?: shared.DataSourceListResponse;

  @Metadata()
  statusCode: number;
}
