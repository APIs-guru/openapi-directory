import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListNsxvManagersSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListNsxvManagersRequest extends SpeakeasyBase {
    security: ListNsxvManagersSecurity;
}
export declare class ListNsxvManagersResponse extends SpeakeasyBase {
    contentType: string;
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
}
