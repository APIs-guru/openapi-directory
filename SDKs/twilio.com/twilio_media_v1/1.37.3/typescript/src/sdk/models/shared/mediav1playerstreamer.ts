import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerStreamerEnumEndedReasonEnum } from "./playerstreamerenumendedreasonenum";
import { PlayerStreamerEnumStatusEnum } from "./playerstreamerenumstatusenum";


export enum MediaV1PlayerStreamerStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class MediaV1PlayerStreamer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=ended_reason" })
  endedReason?: PlayerStreamerEnumEndedReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=max_duration" })
  maxDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PlayerStreamerEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: MediaV1PlayerStreamerStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=video" })
  video?: boolean;
}
