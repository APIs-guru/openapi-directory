import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContactsRemovePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=contactId" })
  contactId: string;
}


export class ContactsRemoveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ContactsRemoveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContactsRemovePathParams;

  @Metadata()
  security: ContactsRemoveSecurity;
}


export class ContactsRemove200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: boolean;
}


export class ContactsRemoveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  contactsRemove200ApplicationJsonObject?: ContactsRemove200ApplicationJson;
}
