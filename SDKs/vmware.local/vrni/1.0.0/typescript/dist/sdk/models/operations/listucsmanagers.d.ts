import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListUcsManagersSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListUcsManagersRequest extends SpeakeasyBase {
    security: ListUcsManagersSecurity;
}
export declare class ListUcsManagersResponse extends SpeakeasyBase {
    contentType: string;
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
}
