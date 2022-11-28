import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompositionHookEnumFormatEnum } from "./compositionhookenumformatenum";


export enum VideoV1CompositionHookStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class VideoV1CompositionHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=audio_sources" })
  audioSources?: string[];

  @SpeakeasyMetadata({ data: "json, name=audio_sources_excluded" })
  audioSourcesExcluded?: string[];

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: CompositionHookEnumFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: VideoV1CompositionHookStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=trim" })
  trim?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=video_layout" })
  videoLayout?: any;
}
