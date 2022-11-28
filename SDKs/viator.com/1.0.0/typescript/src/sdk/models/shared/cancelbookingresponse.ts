import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CancelBookingResponseReasonEnum {
    AlreadyCancelled = "ALREADY_CANCELLED",
    NotCancellable = "NOT_CANCELLABLE"
}

export enum CancelBookingResponseStatusEnum {
    Accepted = "ACCEPTED",
    Declined = "DECLINED"
}


export class CancelBookingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingId" })
  bookingId?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: CancelBookingResponseReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CancelBookingResponseStatusEnum;
}
