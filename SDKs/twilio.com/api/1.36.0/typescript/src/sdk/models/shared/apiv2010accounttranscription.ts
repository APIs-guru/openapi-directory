import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TranscriptionEnumStatusEnum } from "./transcriptionenumstatusenum";


export class ApiV2010AccountTranscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @Metadata({ data: "json, name=recording_sid" })
  recordingSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: TranscriptionEnumStatusEnum;

  @Metadata({ data: "json, name=transcription_text" })
  transcriptionText?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
