import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPanoramaFirewallsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListPanoramaFirewallsRequest extends SpeakeasyBase {
    security: ListPanoramaFirewallsSecurity;
}
export declare class ListPanoramaFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
}
