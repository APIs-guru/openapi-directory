import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSIM_SERVERS = [
	"https://supersim.twilio.com",
];



export class ListSimQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Fleet" })
  fleet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Iccid" })
  iccid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.SimEnumStatusEnum;
}


export class ListSimSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSimRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListSimQueryParams;

  @Metadata()
  security: ListSimSecurity;
}


export class ListSimListSimResponseMeta extends SpeakeasyBase {
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


export class ListSimListSimResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSimListSimResponseMeta;

  @Metadata({ data: "json, name=sims", elemType: shared.SupersimV1Sim })
  sims?: shared.SupersimV1Sim[];
}


export class ListSimResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSimResponse?: ListSimListSimResponse;

  @Metadata()
  statusCode: number;
}
