import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListFleetServerList = [
	"https://supersim.twilio.com",
] as const;


export class ListFleetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkAccessProfile" })
  networkAccessProfile?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFleetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFleetListFleetResponseMeta extends SpeakeasyBase {
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


export class ListFleetListFleetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fleets", elemType: shared.SupersimV1Fleet })
  fleets?: shared.SupersimV1Fleet[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListFleetListFleetResponseMeta;
}


export class ListFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListFleetQueryParams;

  @SpeakeasyMetadata()
  security: ListFleetSecurity;
}


export class ListFleetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listFleetResponse?: ListFleetListFleetResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
