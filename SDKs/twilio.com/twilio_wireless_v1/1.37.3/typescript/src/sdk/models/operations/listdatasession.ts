import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListDataSessionServerList = [
	"https://wireless.twilio.com",
] as const;


export class ListDataSessionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SimSid" })
  simSid: string;
}


export class ListDataSessionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDataSessionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDataSessionListDataSessionResponseMeta extends SpeakeasyBase {
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


export class ListDataSessionListDataSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data_sessions", elemType: shared.WirelessV1SimDataSession })
  dataSessions?: shared.WirelessV1SimDataSession[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListDataSessionListDataSessionResponseMeta;
}


export class ListDataSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListDataSessionPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDataSessionQueryParams;

  @SpeakeasyMetadata()
  security: ListDataSessionSecurity;
}


export class ListDataSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDataSessionResponse?: ListDataSessionListDataSessionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
