import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContactsFetchAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class ContactsFetchAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=firstName" })
  firstName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lastName" })
  lastName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mobile" })
  mobile?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;
}


export class ContactsFetchAllSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ContactsFetchAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContactsFetchAllPathParams;

  @Metadata()
  queryParams: ContactsFetchAllQueryParams;

  @Metadata()
  security: ContactsFetchAllSecurity;
}


export class ContactsFetchAllResponse extends SpeakeasyBase {
  @Metadata()
  contactsResponse?: shared.ContactsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
