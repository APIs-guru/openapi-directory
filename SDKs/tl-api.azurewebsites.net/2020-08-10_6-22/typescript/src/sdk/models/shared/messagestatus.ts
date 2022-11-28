import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MessageStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceId" })
  referenceId?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: any;

  @SpeakeasyMetadata({ data: "json, name=statusId" })
  statusId?: number;

  @SpeakeasyMetadata({ data: "json, name=statusText" })
  statusText?: string;
}
