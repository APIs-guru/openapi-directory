import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListHpovManagersSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListHpovManagersRequest extends SpeakeasyBase {
    security: ListHpovManagersSecurity;
}
export declare class ListHpovManagersResponse extends SpeakeasyBase {
    contentType: string;
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
}
