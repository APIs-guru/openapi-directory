import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizationDocumentEnumStatusEnum } from "./authorizationdocumentenumstatusenum";


export class PreviewHostedNumbersAuthorizationDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=address_sid" })
  addressSid?: string;

  @Metadata({ data: "json, name=cc_emails" })
  ccEmails?: string[];

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: AuthorizationDocumentEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
