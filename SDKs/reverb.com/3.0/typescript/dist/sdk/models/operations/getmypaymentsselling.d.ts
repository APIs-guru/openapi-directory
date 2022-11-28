import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyPaymentsSellingQueryParams extends SpeakeasyBase {
    createdEndDate?: string;
    createdStartDate?: string;
    offset?: number;
    orderId?: string;
    page?: number;
    perPage?: number;
    updatedEndDate?: string;
    updatedStartDate?: string;
}
export declare class GetMyPaymentsSellingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyPaymentsSellingRequest extends SpeakeasyBase {
    queryParams: GetMyPaymentsSellingQueryParams;
    security: GetMyPaymentsSellingSecurity;
}
export declare class GetMyPaymentsSellingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
