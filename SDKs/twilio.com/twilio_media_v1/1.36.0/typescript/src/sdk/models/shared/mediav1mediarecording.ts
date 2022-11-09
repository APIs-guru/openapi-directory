import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MediaRecordingEnumFormatEnum } from "./mediarecordingenumformatenum";
import { MediaRecordingEnumStatusEnum } from "./mediarecordingenumstatusenum";

export enum MediaV1MediaRecordingStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class MediaV1MediaRecording extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=format" })
  format?: MediaRecordingEnumFormatEnum;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=media_size" })
  mediaSize?: number;

  @Metadata({ data: "json, name=processor_sid" })
  processorSid?: string;

  @Metadata({ data: "json, name=resolution" })
  resolution?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=source_sid" })
  sourceSid?: string;

  @Metadata({ data: "json, name=status" })
  status?: MediaRecordingEnumStatusEnum;

  @Metadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @Metadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: MediaV1MediaRecordingStatusCallbackMethodEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
