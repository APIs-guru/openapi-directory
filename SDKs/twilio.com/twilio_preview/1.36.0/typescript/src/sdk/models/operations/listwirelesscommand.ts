import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTWIRELESSCOMMAND_SERVERS = [
	"https://preview.twilio.com",
];



export class ListWirelessCommandQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Direction" })
  direction?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Sim" })
  sim?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: string;
}


export class ListWirelessCommandSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWirelessCommandRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListWirelessCommandQueryParams;

  @Metadata()
  security: ListWirelessCommandSecurity;
}


export class ListWirelessCommandListWirelessCommandResponseMeta extends SpeakeasyBase {
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


export class ListWirelessCommandListWirelessCommandResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=commands", elemType: shared.PreviewWirelessCommand })
  commands?: shared.PreviewWirelessCommand[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListWirelessCommandListWirelessCommandResponseMeta;
}


export class ListWirelessCommandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWirelessCommandResponse?: ListWirelessCommandListWirelessCommandResponse;

  @Metadata()
  statusCode: number;
}
