import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTINTERACTIONCHANNELPARTICIPANT_SERVERS = [
	"https://flex-api.twilio.com",
];



export class ListInteractionChannelParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;
}


export class ListInteractionChannelParticipantQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListInteractionChannelParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListInteractionChannelParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListInteractionChannelParticipantPathParams;

  @Metadata()
  queryParams: ListInteractionChannelParticipantQueryParams;

  @Metadata()
  security: ListInteractionChannelParticipantSecurity;
}


export class ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta extends SpeakeasyBase {
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


export class ListInteractionChannelParticipantListInteractionChannelParticipantResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta;

  @Metadata({ data: "json, name=participants", elemType: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant })
  participants?: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant[];
}


export class ListInteractionChannelParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listInteractionChannelParticipantResponse?: ListInteractionChannelParticipantListInteractionChannelParticipantResponse;

  @Metadata()
  statusCode: number;
}
