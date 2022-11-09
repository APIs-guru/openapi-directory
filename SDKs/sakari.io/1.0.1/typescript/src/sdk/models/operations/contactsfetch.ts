import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContactsFetchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=contactId" })
  contactId: string;
}


export class ContactsFetchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ContactsFetchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContactsFetchPathParams;

  @Metadata()
  security: ContactsFetchSecurity;
}


export class ContactsFetchResponse extends SpeakeasyBase {
  @Metadata()
  contactResponse?: shared.ContactResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
