import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationDocumentEnumStatusEnum } from "./authorizationdocumentenumstatusenum";



export class PreviewHostedNumbersAuthorizationDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_sid" })
  addressSid?: string;

  @SpeakeasyMetadata({ data: "json, name=cc_emails" })
  ccEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AuthorizationDocumentEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
