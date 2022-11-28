import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RefundDetails
/** 
 * Details of the refund
 * 
 * **Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `"CONFIRMED"`.
 * 
**/
export class RefundDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=itemPrice" })
  itemPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=refundAmount" })
  refundAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=refundPercentage" })
  refundPercentage?: number;
}
