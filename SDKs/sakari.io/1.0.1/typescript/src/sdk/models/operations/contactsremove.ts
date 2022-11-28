import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContactsRemovePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contactId" })
  contactId: string;
}


export class ContactsRemoveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ContactsRemove200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class ContactsRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContactsRemovePathParams;

  @SpeakeasyMetadata()
  security: ContactsRemoveSecurity;
}


export class ContactsRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  contactsRemove200ApplicationJsonObject?: ContactsRemove200ApplicationJson;
}
