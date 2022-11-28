import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListMediaServerList = [
	"https://api.twilio.com",
] as const;


export class ListMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" })
  messageSid: string;
}


export class ListMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated<" })
  dateCreatedLessThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated>" })
  dateCreatedGreaterThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMediaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMediaListMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=media_list", elemType: shared.ApiV2010AccountMessageMedia })
  mediaList?: shared.ApiV2010AccountMessageMedia[];

  @SpeakeasyMetadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListMediaPathParams;

  @SpeakeasyMetadata()
  queryParams: ListMediaQueryParams;

  @SpeakeasyMetadata()
  security: ListMediaSecurity;
}


export class ListMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listMediaResponse?: ListMediaListMediaResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
