import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaProcessorEnumStatusEnum } from "./mediaprocessorenumstatusenum";


export enum MediaV1MediaProcessorStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class MediaV1MediaProcessor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=ended_reason" })
  endedReason?: string;

  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_context" })
  extensionContext?: string;

  @SpeakeasyMetadata({ data: "json, name=max_duration" })
  maxDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MediaProcessorEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: MediaV1MediaProcessorStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
