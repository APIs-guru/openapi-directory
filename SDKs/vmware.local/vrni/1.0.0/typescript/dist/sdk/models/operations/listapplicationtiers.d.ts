import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListApplicationTiersPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ListApplicationTiersSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListApplicationTiersRequest extends SpeakeasyBase {
    pathParams: ListApplicationTiersPathParams;
    security: ListApplicationTiersSecurity;
}
export declare class ListApplicationTiersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tierListResponse?: shared.TierListResponse;
}
