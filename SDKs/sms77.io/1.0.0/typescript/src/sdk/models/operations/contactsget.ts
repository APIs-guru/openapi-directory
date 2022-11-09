import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ContactsGetActionEnum {
    Read = "read"
}


export class ContactsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=action" })
  action: ContactsGetActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=json" })
  json?: number;
}


export class ContactsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ContactsGetQueryParams;
}


export class ContactsGetResponse extends SpeakeasyBase {
  @Metadata()
  contactsGet200ApplicationJsonString?: string;

  @Metadata()
  contactsGet200TextCsvString?: string;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
