import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCOMMAND_SERVERS = [
	"https://wireless.twilio.com",
];



export class ListCommandQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Direction" })
  direction?: shared.CommandEnumDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Sim" })
  sim?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.CommandEnumStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Transport" })
  transport?: shared.CommandEnumTransportEnum;
}


export class ListCommandSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCommandRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListCommandQueryParams;

  @Metadata()
  security: ListCommandSecurity;
}


export class ListCommandListCommandResponseMeta extends SpeakeasyBase {
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


export class ListCommandListCommandResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=commands", elemType: shared.WirelessV1Command })
  commands?: shared.WirelessV1Command[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListCommandListCommandResponseMeta;
}


export class ListCommandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCommandResponse?: ListCommandListCommandResponse;

  @Metadata()
  statusCode: number;
}
