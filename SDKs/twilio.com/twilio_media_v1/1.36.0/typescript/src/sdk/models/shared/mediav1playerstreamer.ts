import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlayerStreamerEnumEndedReasonEnum } from "./playerstreamerenumendedreasonenum";
import { PlayerStreamerEnumStatusEnum } from "./playerstreamerenumstatusenum";

export enum MediaV1PlayerStreamerStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class MediaV1PlayerStreamer extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=ended_reason" })
  endedReason?: PlayerStreamerEnumEndedReasonEnum;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=max_duration" })
  maxDuration?: number;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: PlayerStreamerEnumStatusEnum;

  @Metadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @Metadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: MediaV1PlayerStreamerStatusCallbackMethodEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=video" })
  video?: boolean;
}
