import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompositionEnumFormatEnum } from "./compositionenumformatenum";
import { CompositionEnumStatusEnum } from "./compositionenumstatusenum";

export enum VideoV1CompositionStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class VideoV1Composition extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=audio_sources" })
  audioSources?: string[];

  @Metadata({ data: "json, name=audio_sources_excluded" })
  audioSourcesExcluded?: string[];

  @Metadata({ data: "json, name=bitrate" })
  bitrate?: number;

  @Metadata({ data: "json, name=date_completed" })
  dateCompleted?: Date;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_deleted" })
  dateDeleted?: Date;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=format" })
  format?: CompositionEnumFormatEnum;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=media_external_location" })
  mediaExternalLocation?: string;

  @Metadata({ data: "json, name=resolution" })
  resolution?: string;

  @Metadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=status" })
  status?: CompositionEnumStatusEnum;

  @Metadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @Metadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: VideoV1CompositionStatusCallbackMethodEnum;

  @Metadata({ data: "json, name=trim" })
  trim?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=video_layout" })
  videoLayout?: any;
}
