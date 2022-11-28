import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListJuniperSwitchesSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListJuniperSwitchesRequest extends SpeakeasyBase {
    security: ListJuniperSwitchesSecurity;
}
export declare class ListJuniperSwitchesResponse extends SpeakeasyBase {
    contentType: string;
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
}
