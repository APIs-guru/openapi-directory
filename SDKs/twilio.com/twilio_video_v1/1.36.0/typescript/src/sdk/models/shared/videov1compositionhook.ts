import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompositionHookEnumFormatEnum } from "./compositionhookenumformatenum";

export enum VideoV1CompositionHookStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class VideoV1CompositionHook extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=audio_sources" })
  audioSources?: string[];

  @Metadata({ data: "json, name=audio_sources_excluded" })
  audioSourcesExcluded?: string[];

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: CompositionHookEnumFormatEnum;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=resolution" })
  resolution?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @Metadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: VideoV1CompositionHookStatusCallbackMethodEnum;

  @Metadata({ data: "json, name=trim" })
  trim?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=video_layout" })
  videoLayout?: any;
}
