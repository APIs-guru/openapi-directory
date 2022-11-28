import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVcentersSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListVcentersRequest extends SpeakeasyBase {
    security: ListVcentersSecurity;
}
export declare class ListVcentersResponse extends SpeakeasyBase {
    contentType: string;
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
}
