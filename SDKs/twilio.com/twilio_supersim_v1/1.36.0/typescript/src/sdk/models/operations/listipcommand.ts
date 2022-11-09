import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTIPCOMMAND_SERVERS = [
	"https://supersim.twilio.com",
];



export class ListIpCommandQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Direction" })
  direction?: shared.IpCommandEnumDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Sim" })
  sim?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SimIccid" })
  simIccid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.IpCommandEnumStatusEnum;
}


export class ListIpCommandSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListIpCommandRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListIpCommandQueryParams;

  @Metadata()
  security: ListIpCommandSecurity;
}


export class ListIpCommandListIpCommandResponseMeta extends SpeakeasyBase {
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


export class ListIpCommandListIpCommandResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_commands", elemType: shared.SupersimV1IpCommand })
  ipCommands?: shared.SupersimV1IpCommand[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListIpCommandListIpCommandResponseMeta;
}


export class ListIpCommandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listIpCommandResponse?: ListIpCommandListIpCommandResponse;

  @Metadata()
  statusCode: number;
}
