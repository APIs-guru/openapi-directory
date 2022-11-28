import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListWirelessSimServerList = [
	"https://preview.twilio.com",
] as const;


export class ListWirelessSimQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EId" })
  eId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Iccid" })
  iccid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RatePlan" })
  ratePlan?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SimRegistrationCode" })
  simRegistrationCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: string;
}


export class ListWirelessSimSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWirelessSimListWirelessSimResponseMeta extends SpeakeasyBase {
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


export class ListWirelessSimListWirelessSimResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListWirelessSimListWirelessSimResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=sims", elemType: shared.PreviewWirelessSim })
  sims?: shared.PreviewWirelessSim[];
}


export class ListWirelessSimRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListWirelessSimQueryParams;

  @SpeakeasyMetadata()
  security: ListWirelessSimSecurity;
}


export class ListWirelessSimResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listWirelessSimResponse?: ListWirelessSimListWirelessSimResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
