import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListHpvcManagersSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListHpvcManagersRequest extends SpeakeasyBase {
    security: ListHpvcManagersSecurity;
}
export declare class ListHpvcManagersResponse extends SpeakeasyBase {
    contentType: string;
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
}
