import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompositionEnumFormatEnum } from "./compositionenumformatenum";
import { CompositionEnumStatusEnum } from "./compositionenumstatusenum";


export enum VideoV1CompositionStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class VideoV1Composition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=audio_sources" })
  audioSources?: string[];

  @SpeakeasyMetadata({ data: "json, name=audio_sources_excluded" })
  audioSourcesExcluded?: string[];

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=date_completed" })
  dateCompleted?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_deleted" })
  dateDeleted?: Date;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: CompositionEnumFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=media_external_location" })
  mediaExternalLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CompositionEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: VideoV1CompositionStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=trim" })
  trim?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=video_layout" })
  videoLayout?: any;
}
