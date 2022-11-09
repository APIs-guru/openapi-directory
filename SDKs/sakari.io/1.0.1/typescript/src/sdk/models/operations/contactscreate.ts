import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContactsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}

export enum ContactsCreateMergeStrategyEnum {
    Append = "append"
,    Core = "core"
,    Remove = "remove"
}


export class ContactsCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=mergeStrategy" })
  mergeStrategy?: ContactsCreateMergeStrategyEnum;
}


export class ContactsCreateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  contactRequest?: shared.ContactRequest;

  @Metadata({ data: "request, media_type=text/csv" })
  string?: string;
}


export class ContactsCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ContactsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContactsCreatePathParams;

  @Metadata()
  queryParams: ContactsCreateQueryParams;

  @Metadata()
  request?: ContactsCreateRequests;

  @Metadata()
  security: ContactsCreateSecurity;
}


export class ContactsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  contactsCreate201ApplicationJsonOneOf?: any;
}
