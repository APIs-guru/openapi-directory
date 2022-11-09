import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTINTERACTIONCHANNELINVITE_SERVERS = [
	"https://flex-api.twilio.com",
];



export class ListInteractionChannelInvitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;
}


export class ListInteractionChannelInviteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListInteractionChannelInviteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListInteractionChannelInviteRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListInteractionChannelInvitePathParams;

  @Metadata()
  queryParams: ListInteractionChannelInviteQueryParams;

  @Metadata()
  security: ListInteractionChannelInviteSecurity;
}


export class ListInteractionChannelInviteListInteractionChannelInviteResponseMeta extends SpeakeasyBase {
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


export class ListInteractionChannelInviteListInteractionChannelInviteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=invites", elemType: shared.FlexV1InteractionInteractionChannelInteractionChannelInvite })
  invites?: shared.FlexV1InteractionInteractionChannelInteractionChannelInvite[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListInteractionChannelInviteListInteractionChannelInviteResponseMeta;
}


export class ListInteractionChannelInviteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listInteractionChannelInviteResponse?: ListInteractionChannelInviteListInteractionChannelInviteResponse;

  @Metadata()
  statusCode: number;
}
