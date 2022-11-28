import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBrocadeSwitchesSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListBrocadeSwitchesRequest extends SpeakeasyBase {
    security: ListBrocadeSwitchesSecurity;
}
export declare class ListBrocadeSwitchesResponse extends SpeakeasyBase {
    contentType: string;
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
}
