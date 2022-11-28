import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListEndUserTypeServerList = [
	"https://trusthub.twilio.com",
] as const;


export class ListEndUserTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListEndUserTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEndUserTypeListEndUserTypeResponseMeta extends SpeakeasyBase {
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


export class ListEndUserTypeListEndUserTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_user_types", elemType: shared.TrusthubV1EndUserType })
  endUserTypes?: shared.TrusthubV1EndUserType[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListEndUserTypeListEndUserTypeResponseMeta;
}


export class ListEndUserTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListEndUserTypeQueryParams;

  @SpeakeasyMetadata()
  security: ListEndUserTypeSecurity;
}


export class ListEndUserTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listEndUserTypeResponse?: ListEndUserTypeListEndUserTypeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
