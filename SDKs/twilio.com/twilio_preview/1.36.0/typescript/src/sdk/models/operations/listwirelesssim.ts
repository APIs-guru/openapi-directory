import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTWIRELESSSIM_SERVERS = [
	"https://preview.twilio.com",
];



export class ListWirelessSimQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EId" })
  eId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Iccid" })
  iccid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RatePlan" })
  ratePlan?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SimRegistrationCode" })
  simRegistrationCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: string;
}


export class ListWirelessSimSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWirelessSimRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListWirelessSimQueryParams;

  @Metadata()
  security: ListWirelessSimSecurity;
}


export class ListWirelessSimListWirelessSimResponseMeta extends SpeakeasyBase {
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


export class ListWirelessSimListWirelessSimResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListWirelessSimListWirelessSimResponseMeta;

  @Metadata({ data: "json, name=sims", elemType: shared.PreviewWirelessSim })
  sims?: shared.PreviewWirelessSim[];
}


export class ListWirelessSimResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWirelessSimResponse?: ListWirelessSimListWirelessSimResponse;

  @Metadata()
  statusCode: number;
}
