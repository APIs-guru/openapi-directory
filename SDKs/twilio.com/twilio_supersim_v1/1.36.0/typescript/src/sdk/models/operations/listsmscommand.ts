import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSMSCOMMAND_SERVERS = [
	"https://supersim.twilio.com",
];



export class ListSmsCommandQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Direction" })
  direction?: shared.SmsCommandEnumDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Sim" })
  sim?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.SmsCommandEnumStatusEnum;
}


export class ListSmsCommandSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSmsCommandRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListSmsCommandQueryParams;

  @Metadata()
  security: ListSmsCommandSecurity;
}


export class ListSmsCommandListSmsCommandResponseMeta extends SpeakeasyBase {
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


export class ListSmsCommandListSmsCommandResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSmsCommandListSmsCommandResponseMeta;

  @Metadata({ data: "json, name=sms_commands", elemType: shared.SupersimV1SmsCommand })
  smsCommands?: shared.SupersimV1SmsCommand[];
}


export class ListSmsCommandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSmsCommandResponse?: ListSmsCommandListSmsCommandResponse;

  @Metadata()
  statusCode: number;
}
