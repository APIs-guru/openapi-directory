import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of the refund
 *
 * **Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `"CONFIRMED"`.
 *
**/
export declare class RefundDetails extends SpeakeasyBase {
    currencyCode?: string;
    itemPrice?: number;
    refundAmount?: number;
    refundPercentage?: number;
}
