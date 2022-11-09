import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordingEnumCodecEnum } from "./recordingenumcodecenum";
import { RecordingEnumFormatEnum } from "./recordingenumformatenum";
import { RecordingEnumStatusEnum } from "./recordingenumstatusenum";
import { RecordingEnumTypeEnum } from "./recordingenumtypeenum";

export enum VideoV1RecordingStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class VideoV1Recording extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=codec" })
  codec?: RecordingEnumCodecEnum;

  @Metadata({ data: "json, name=container_format" })
  containerFormat?: RecordingEnumFormatEnum;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=grouping_sids" })
  groupingSids?: any;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=media_external_location" })
  mediaExternalLocation?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=source_sid" })
  sourceSid?: string;

  @Metadata({ data: "json, name=status" })
  status?: RecordingEnumStatusEnum;

  @Metadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @Metadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: VideoV1RecordingStatusCallbackMethodEnum;

  @Metadata({ data: "json, name=track_name" })
  trackName?: string;

  @Metadata({ data: "json, name=type" })
  type?: RecordingEnumTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
