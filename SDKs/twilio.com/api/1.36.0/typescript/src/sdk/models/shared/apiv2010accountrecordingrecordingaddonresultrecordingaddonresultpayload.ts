import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=add_on_configuration_sid" })
  addOnConfigurationSid?: string;

  @Metadata({ data: "json, name=add_on_result_sid" })
  addOnResultSid?: string;

  @Metadata({ data: "json, name=add_on_sid" })
  addOnSid?: string;

  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=reference_sid" })
  referenceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;
}
