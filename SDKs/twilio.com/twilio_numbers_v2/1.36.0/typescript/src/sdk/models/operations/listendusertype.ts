import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTENDUSERTYPE_SERVERS = [
	"https://numbers.twilio.com",
];



export class ListEndUserTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListEndUserTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEndUserTypeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListEndUserTypeQueryParams;

  @Metadata()
  security: ListEndUserTypeSecurity;
}


export class ListEndUserTypeListEndUserTypeResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListEndUserTypeListEndUserTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_user_types", elemType: shared.NumbersV2RegulatoryComplianceEndUserType })
  endUserTypes?: shared.NumbersV2RegulatoryComplianceEndUserType[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListEndUserTypeListEndUserTypeResponseMeta;
}


export class ListEndUserTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listEndUserTypeResponse?: ListEndUserTypeListEndUserTypeResponse;

  @Metadata()
  statusCode: number;
}
