import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListInteractionChannelInviteServerList = [
	"https://flex-api.twilio.com",
] as const;


export class ListInteractionChannelInvitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;
}


export class ListInteractionChannelInviteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListInteractionChannelInviteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListInteractionChannelInviteListInteractionChannelInviteResponseMeta extends SpeakeasyBase {
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


export class ListInteractionChannelInviteListInteractionChannelInviteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invites", elemType: shared.FlexV1InteractionInteractionChannelInteractionChannelInvite })
  invites?: shared.FlexV1InteractionInteractionChannelInteractionChannelInvite[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListInteractionChannelInviteListInteractionChannelInviteResponseMeta;
}


export class ListInteractionChannelInviteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListInteractionChannelInvitePathParams;

  @SpeakeasyMetadata()
  queryParams: ListInteractionChannelInviteQueryParams;

  @SpeakeasyMetadata()
  security: ListInteractionChannelInviteSecurity;
}


export class ListInteractionChannelInviteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listInteractionChannelInviteResponse?: ListInteractionChannelInviteListInteractionChannelInviteResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
