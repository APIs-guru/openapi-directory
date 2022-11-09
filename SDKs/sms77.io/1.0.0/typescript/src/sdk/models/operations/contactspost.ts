import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ContactsPostActionEnum {
    Del = "del"
,    Write = "write"
}


export class ContactsPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=action" })
  action: ContactsPostActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=empfaenger" })
  empfaenger?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=json" })
  json?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nick" })
  nick?: string;
}


export class ContactsPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ContactsPostQueryParams;
}


export class ContactsPostResponse extends SpeakeasyBase {
  @Metadata()
  contactsPost200ApplicationJsonString?: string;

  @Metadata()
  contactsPost200TextPlainString?: string;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
