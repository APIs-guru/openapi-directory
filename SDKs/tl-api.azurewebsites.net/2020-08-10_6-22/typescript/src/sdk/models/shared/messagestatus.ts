import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MessageStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageId" })
  messageId?: string;

  @Metadata({ data: "json, name=referenceId" })
  referenceId?: number;

  @Metadata({ data: "json, name=source" })
  source?: any;

  @Metadata({ data: "json, name=statusId" })
  statusId?: number;

  @Metadata({ data: "json, name=statusText" })
  statusText?: string;
}
