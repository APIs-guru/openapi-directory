import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewUnderstandAssistantFieldTypeFieldValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=assistant_sid" })
  assistantSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=field_type_sid" })
  fieldTypeSid?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=synonym_of" })
  synonymOf?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
