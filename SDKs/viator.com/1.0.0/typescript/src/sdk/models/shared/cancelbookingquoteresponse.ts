import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RefundDetails } from "./refunddetails";


export enum CancelBookingQuoteResponseStatusEnum {
    Cancellable = "CANCELLABLE",
    Cancelled = "CANCELLED",
    NotCancellable = "NOT_CANCELLABLE"
}


export class CancelBookingQuoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingId" })
  bookingId?: string;

  @SpeakeasyMetadata({ data: "json, name=refundDetails" })
  refundDetails?: RefundDetails;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CancelBookingQuoteResponseStatusEnum;
}
