import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ContactsPostActionEnum {
    Del = "del",
    Write = "write"
}


export class ContactsPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action: ContactsPostActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=empfaenger" })
  empfaenger?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=json" })
  json?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nick" })
  nick?: string;
}


export class ContactsPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ContactsPostQueryParams;
}


export class ContactsPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contactsPost200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  contactsPost200TextPlainString?: string;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
