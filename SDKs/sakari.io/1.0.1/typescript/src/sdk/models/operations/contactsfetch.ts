import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContactsFetchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contactId" })
  contactId: string;
}


export class ContactsFetchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ContactsFetchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContactsFetchPathParams;

  @SpeakeasyMetadata()
  security: ContactsFetchSecurity;
}


export class ContactsFetchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contactResponse?: shared.ContactResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
