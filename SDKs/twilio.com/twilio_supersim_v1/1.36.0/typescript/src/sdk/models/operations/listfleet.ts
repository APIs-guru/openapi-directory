import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTFLEET_SERVERS = [
	"https://supersim.twilio.com",
];



export class ListFleetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkAccessProfile" })
  networkAccessProfile?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFleetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFleetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListFleetQueryParams;

  @Metadata()
  security: ListFleetSecurity;
}


export class ListFleetListFleetResponseMeta extends SpeakeasyBase {
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


export class ListFleetListFleetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fleets", elemType: shared.SupersimV1Fleet })
  fleets?: shared.SupersimV1Fleet[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListFleetListFleetResponseMeta;
}


export class ListFleetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFleetResponse?: ListFleetListFleetResponse;

  @Metadata()
  statusCode: number;
}
