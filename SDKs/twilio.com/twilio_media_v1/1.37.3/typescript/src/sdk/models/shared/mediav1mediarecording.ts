import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaRecordingEnumFormatEnum } from "./mediarecordingenumformatenum";
import { MediaRecordingEnumStatusEnum } from "./mediarecordingenumstatusenum";


export enum MediaV1MediaRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class MediaV1MediaRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: MediaRecordingEnumFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=media_size" })
  mediaSize?: number;

  @SpeakeasyMetadata({ data: "json, name=processor_sid" })
  processorSid?: string;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=source_sid" })
  sourceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MediaRecordingEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: MediaV1MediaRecordingStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
