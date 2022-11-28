import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListMessageServerList = [
	"https://api.twilio.com",
] as const;


export class ListMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListMessageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateSent" })
  dateSent?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateSent<" })
  dateSentLessThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateSent>" })
  dateSentGreaterThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=From" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=To" })
  to?: string;
}


export class ListMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMessageListMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.ApiV2010AccountMessage })
  messages?: shared.ApiV2010AccountMessage[];

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


export class ListMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListMessagePathParams;

  @SpeakeasyMetadata()
  queryParams: ListMessageQueryParams;

  @SpeakeasyMetadata()
  security: ListMessageSecurity;
}


export class ListMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listMessageResponse?: ListMessageListMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
