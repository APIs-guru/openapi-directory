import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListInteractionChannelParticipantServerList = [
	"https://flex-api.twilio.com",
] as const;


export class ListInteractionChannelParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;
}


export class ListInteractionChannelParticipantQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListInteractionChannelParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta extends SpeakeasyBase {
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


export class ListInteractionChannelParticipantListInteractionChannelParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant })
  participants?: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant[];
}


export class ListInteractionChannelParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListInteractionChannelParticipantPathParams;

  @SpeakeasyMetadata()
  queryParams: ListInteractionChannelParticipantQueryParams;

  @SpeakeasyMetadata()
  security: ListInteractionChannelParticipantSecurity;
}


export class ListInteractionChannelParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listInteractionChannelParticipantResponse?: ListInteractionChannelParticipantListInteractionChannelParticipantResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
