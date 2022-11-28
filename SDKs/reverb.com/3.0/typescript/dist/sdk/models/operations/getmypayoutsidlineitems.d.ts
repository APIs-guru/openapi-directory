import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyPayoutsIdLineItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetMyPayoutsIdLineItemsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyPayoutsIdLineItemsRequest extends SpeakeasyBase {
    pathParams: GetMyPayoutsIdLineItemsPathParams;
    security: GetMyPayoutsIdLineItemsSecurity;
}
export declare class GetMyPayoutsIdLineItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
