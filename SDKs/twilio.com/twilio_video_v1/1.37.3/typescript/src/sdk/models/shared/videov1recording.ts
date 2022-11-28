import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordingEnumCodecEnum } from "./recordingenumcodecenum";
import { RecordingEnumFormatEnum } from "./recordingenumformatenum";
import { RecordingEnumStatusEnum } from "./recordingenumstatusenum";
import { RecordingEnumTypeEnum } from "./recordingenumtypeenum";


export enum VideoV1RecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class VideoV1Recording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=codec" })
  codec?: RecordingEnumCodecEnum;

  @SpeakeasyMetadata({ data: "json, name=container_format" })
  containerFormat?: RecordingEnumFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=grouping_sids" })
  groupingSids?: any;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=media_external_location" })
  mediaExternalLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=source_sid" })
  sourceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RecordingEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: VideoV1RecordingStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=track_name" })
  trackName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RecordingEnumTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
