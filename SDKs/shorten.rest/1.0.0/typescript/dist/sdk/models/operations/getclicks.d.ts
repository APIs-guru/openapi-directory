import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetClicksQueryParams extends SpeakeasyBase {
    continueFrom?: string;
    limit?: number;
}
export declare class GetClicksSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetClicksRequest extends SpeakeasyBase {
    queryParams: GetClicksQueryParams;
    security: GetClicksSecurity;
}
export declare class GetClicksResponse extends SpeakeasyBase {
    contentType: string;
    getClicksModel?: shared.GetClicksModel;
    statusCode: number;
}
