import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAristaSwitchesSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListAristaSwitchesRequest extends SpeakeasyBase {
    security: ListAristaSwitchesSecurity;
}
export declare class ListAristaSwitchesResponse extends SpeakeasyBase {
    contentType: string;
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
}
