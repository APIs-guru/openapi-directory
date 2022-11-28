import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListCommandServerList = [
	"https://wireless.twilio.com",
] as const;


export class ListCommandQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Direction" })
  direction?: shared.CommandEnumDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Sim" })
  sim?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.CommandEnumStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Transport" })
  transport?: shared.CommandEnumTransportEnum;
}


export class ListCommandSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCommandListCommandResponseMeta extends SpeakeasyBase {
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


export class ListCommandListCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commands", elemType: shared.WirelessV1Command })
  commands?: shared.WirelessV1Command[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListCommandListCommandResponseMeta;
}


export class ListCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListCommandQueryParams;

  @SpeakeasyMetadata()
  security: ListCommandSecurity;
}


export class ListCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCommandResponse?: ListCommandListCommandResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
