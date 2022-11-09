import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RefundDetails
/** 
 * Details of the refund
 * 
 * **Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `"CONFIRMED"`.
 * 
**/
export class RefundDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=itemPrice" })
  itemPrice?: number;

  @Metadata({ data: "json, name=refundAmount" })
  refundAmount?: number;

  @Metadata({ data: "json, name=refundPercentage" })
  refundPercentage?: number;
}
