import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTINTERACTIONCHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
];



export class ListInteractionChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;
}


export class ListInteractionChannelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListInteractionChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListInteractionChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListInteractionChannelPathParams;

  @Metadata()
  queryParams: ListInteractionChannelQueryParams;

  @Metadata()
  security: ListInteractionChannelSecurity;
}


export class ListInteractionChannelListInteractionChannelResponseMeta extends SpeakeasyBase {
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


export class ListInteractionChannelListInteractionChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels", elemType: shared.FlexV1InteractionInteractionChannel })
  channels?: shared.FlexV1InteractionInteractionChannel[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListInteractionChannelListInteractionChannelResponseMeta;
}


export class ListInteractionChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listInteractionChannelResponse?: ListInteractionChannelListInteractionChannelResponse;

  @Metadata()
  statusCode: number;
}
