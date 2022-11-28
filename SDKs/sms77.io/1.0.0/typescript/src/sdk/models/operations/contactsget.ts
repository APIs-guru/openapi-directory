import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ContactsGetActionEnum {
    Read = "read"
}


export class ContactsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action: ContactsGetActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=json" })
  json?: number;
}


export class ContactsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ContactsGetQueryParams;
}


export class ContactsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contactsGet200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  contactsGet200TextCsvString?: string;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
