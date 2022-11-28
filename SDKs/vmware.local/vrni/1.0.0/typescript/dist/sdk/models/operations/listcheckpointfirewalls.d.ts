import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCheckpointFirewallsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListCheckpointFirewallsRequest extends SpeakeasyBase {
    security: ListCheckpointFirewallsSecurity;
}
export declare class ListCheckpointFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
}
