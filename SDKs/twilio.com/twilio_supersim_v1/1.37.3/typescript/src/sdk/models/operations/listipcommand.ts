import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListIpCommandServerList = [
	"https://supersim.twilio.com",
] as const;


export class ListIpCommandQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Direction" })
  direction?: shared.IpCommandEnumDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Sim" })
  sim?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SimIccid" })
  simIccid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.IpCommandEnumStatusEnum;
}


export class ListIpCommandSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListIpCommandListIpCommandResponseMeta extends SpeakeasyBase {
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


export class ListIpCommandListIpCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_commands", elemType: shared.SupersimV1IpCommand })
  ipCommands?: shared.SupersimV1IpCommand[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListIpCommandListIpCommandResponseMeta;
}


export class ListIpCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListIpCommandQueryParams;

  @SpeakeasyMetadata()
  security: ListIpCommandSecurity;
}


export class ListIpCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listIpCommandResponse?: ListIpCommandListIpCommandResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
