import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListFaxMediaServerList = [
	"https://fax.twilio.com",
] as const;


export class ListFaxMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FaxSid" })
  faxSid: string;
}


export class ListFaxMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFaxMediaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFaxMediaListFaxMediaResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListFaxMediaListFaxMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=media", elemType: shared.FaxV1FaxFaxMedia })
  media?: shared.FaxV1FaxFaxMedia[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListFaxMediaListFaxMediaResponseMeta;
}


export class ListFaxMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListFaxMediaPathParams;

  @SpeakeasyMetadata()
  queryParams: ListFaxMediaQueryParams;

  @SpeakeasyMetadata()
  security: ListFaxMediaSecurity;
}


export class ListFaxMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listFaxMediaResponse?: ListFaxMediaListFaxMediaResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
