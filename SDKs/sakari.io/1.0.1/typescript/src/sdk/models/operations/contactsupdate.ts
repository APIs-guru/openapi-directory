import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContactsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contactId" })
  contactId: string;
}


export class ContactsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ContactsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContactsUpdatePathParams;

  @SpeakeasyMetadata()
  security: ContactsUpdateSecurity;
}


export class ContactsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contactResponse?: shared.ContactResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
