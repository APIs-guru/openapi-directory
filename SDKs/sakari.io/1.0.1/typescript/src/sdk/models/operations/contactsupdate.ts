import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContactsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=contactId" })
  contactId: string;
}


export class ContactsUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ContactsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContactsUpdatePathParams;

  @Metadata()
  security: ContactsUpdateSecurity;
}


export class ContactsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contactResponse?: shared.ContactResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
