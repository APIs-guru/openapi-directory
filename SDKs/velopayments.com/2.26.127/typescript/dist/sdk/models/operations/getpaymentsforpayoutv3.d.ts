import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentsForPayoutV3PathParams extends SpeakeasyBase {
    payoutId: string;
}
export declare enum GetPaymentsForPayoutV3StatusEnum {
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Withdrawn = "WITHDRAWN",
    Withdrawable = "WITHDRAWABLE"
}
export declare enum GetPaymentsForPayoutV3TransmissionTypeEnum {
    Ach = "ACH",
    SameDayAch = "SAME_DAY_ACH",
    Wire = "WIRE"
}
export declare class GetPaymentsForPayoutV3QueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    paymentMemo?: string;
    payorPaymentId?: string;
    remoteId?: string;
    sourceAccountName?: string;
    status?: GetPaymentsForPayoutV3StatusEnum;
    transmissionType?: GetPaymentsForPayoutV3TransmissionTypeEnum;
}
export declare class GetPaymentsForPayoutV3Request extends SpeakeasyBase {
    pathParams: GetPaymentsForPayoutV3PathParams;
    queryParams: GetPaymentsForPayoutV3QueryParams;
}
export declare class GetPaymentsForPayoutV3Response extends SpeakeasyBase {
    contentType: string;
    pagedPaymentsResponseV3?: shared.PagedPaymentsResponseV3;
    statusCode: number;
    inlineResponse404?: any;
}
