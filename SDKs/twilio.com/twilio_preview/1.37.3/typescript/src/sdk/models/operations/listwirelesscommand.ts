import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListWirelessCommandServerList = [
	"https://preview.twilio.com",
] as const;


export class ListWirelessCommandQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Sim" })
  sim?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: string;
}


export class ListWirelessCommandSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWirelessCommandListWirelessCommandResponseMeta extends SpeakeasyBase {
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


export class ListWirelessCommandListWirelessCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commands", elemType: shared.PreviewWirelessCommand })
  commands?: shared.PreviewWirelessCommand[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListWirelessCommandListWirelessCommandResponseMeta;
}


export class ListWirelessCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListWirelessCommandQueryParams;

  @SpeakeasyMetadata()
  security: ListWirelessCommandSecurity;
}


export class ListWirelessCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listWirelessCommandResponse?: ListWirelessCommandListWirelessCommandResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
