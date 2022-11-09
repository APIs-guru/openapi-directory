import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RefundDetails } from "./refunddetails";

export enum CancelBookingQuoteResponseStatusEnum {
    Cancellable = "CANCELLABLE"
,    Cancelled = "CANCELLED"
,    NotCancellable = "NOT_CANCELLABLE"
}


export class CancelBookingQuoteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingId" })
  bookingId?: string;

  @Metadata({ data: "json, name=refundDetails" })
  refundDetails?: RefundDetails;

  @Metadata({ data: "json, name=status" })
  status?: CancelBookingQuoteResponseStatusEnum;
}
