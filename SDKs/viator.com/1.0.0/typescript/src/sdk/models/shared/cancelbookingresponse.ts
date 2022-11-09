import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CancelBookingResponseReasonEnum {
    AlreadyCancelled = "ALREADY_CANCELLED"
,    NotCancellable = "NOT_CANCELLABLE"
}

export enum CancelBookingResponseStatusEnum {
    Accepted = "ACCEPTED"
,    Declined = "DECLINED"
}


export class CancelBookingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingId" })
  bookingId?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: CancelBookingResponseReasonEnum;

  @Metadata({ data: "json, name=status" })
  status?: CancelBookingResponseStatusEnum;
}
