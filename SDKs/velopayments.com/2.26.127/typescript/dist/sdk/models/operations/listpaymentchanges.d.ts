import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPaymentChangesQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    payorId: string;
    updatedSince: Date;
}
export declare class ListPaymentChangesRequest extends SpeakeasyBase {
    queryParams: ListPaymentChangesQueryParams;
}
export declare class ListPaymentChangesResponse extends SpeakeasyBase {
    contentType: string;
    paymentDeltaResponseV1?: shared.PaymentDeltaResponseV1;
    statusCode: number;
}
