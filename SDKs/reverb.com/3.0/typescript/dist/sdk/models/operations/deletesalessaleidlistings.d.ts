import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSalesSaleIdListingsPathParams extends SpeakeasyBase {
    saleId: string;
}
export declare class DeleteSalesSaleIdListingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteSalesSaleIdListingsRequest extends SpeakeasyBase {
    pathParams: DeleteSalesSaleIdListingsPathParams;
    security: DeleteSalesSaleIdListingsSecurity;
}
export declare class DeleteSalesSaleIdListingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
