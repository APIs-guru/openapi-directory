import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDellSwitchesSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListDellSwitchesRequest extends SpeakeasyBase {
    security: ListDellSwitchesSecurity;
}
export declare class ListDellSwitchesResponse extends SpeakeasyBase {
    contentType: string;
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
}
