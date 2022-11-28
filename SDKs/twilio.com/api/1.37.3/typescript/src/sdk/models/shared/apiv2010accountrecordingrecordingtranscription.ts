import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordingTranscriptionEnumStatusEnum } from "./recordingtranscriptionenumstatusenum";



export class ApiV2010AccountRecordingRecordingTranscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_sid" })
  recordingSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RecordingTranscriptionEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transcription_text" })
  transcriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
