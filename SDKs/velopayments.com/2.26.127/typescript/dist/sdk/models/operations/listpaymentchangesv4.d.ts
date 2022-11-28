import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPaymentChangesV4QueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    payorId: string;
    updatedSince: Date;
}
export declare class ListPaymentChangesV4Request extends SpeakeasyBase {
    queryParams: ListPaymentChangesV4QueryParams;
}
export declare class ListPaymentChangesV4Response extends SpeakeasyBase {
    contentType: string;
    paymentDeltaResponse?: shared.PaymentDeltaResponse;
    statusCode: number;
}
