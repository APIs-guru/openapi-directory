import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCiscoSwitchesSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListCiscoSwitchesRequest extends SpeakeasyBase {
    security: ListCiscoSwitchesSecurity;
}
export declare class ListCiscoSwitchesResponse extends SpeakeasyBase {
    contentType: string;
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
}
