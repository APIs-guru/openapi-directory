import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MediaProcessorEnumStatusEnum } from "./mediaprocessorenumstatusenum";

export enum MediaV1MediaProcessorStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class MediaV1MediaProcessor extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=ended_reason" })
  endedReason?: string;

  @Metadata({ data: "json, name=extension" })
  extension?: string;

  @Metadata({ data: "json, name=extension_context" })
  extensionContext?: string;

  @Metadata({ data: "json, name=max_duration" })
  maxDuration?: number;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: MediaProcessorEnumStatusEnum;

  @Metadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @Metadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: MediaV1MediaProcessorStatusCallbackMethodEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
