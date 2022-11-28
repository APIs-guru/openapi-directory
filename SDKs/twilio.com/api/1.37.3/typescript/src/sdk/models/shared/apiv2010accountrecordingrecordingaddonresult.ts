import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordingAddOnResultEnumStatusEnum } from "./recordingaddonresultenumstatusenum";



export class ApiV2010AccountRecordingRecordingAddOnResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=add_on_configuration_sid" })
  addOnConfigurationSid?: string;

  @SpeakeasyMetadata({ data: "json, name=add_on_sid" })
  addOnSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_completed" })
  dateCompleted?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=reference_sid" })
  referenceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RecordingAddOnResultEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;
}
