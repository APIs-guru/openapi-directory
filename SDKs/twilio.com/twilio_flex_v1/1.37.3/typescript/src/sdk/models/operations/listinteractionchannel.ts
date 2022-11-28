import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListInteractionChannelServerList = [
	"https://flex-api.twilio.com",
] as const;


export class ListInteractionChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;
}


export class ListInteractionChannelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListInteractionChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListInteractionChannelListInteractionChannelResponseMeta extends SpeakeasyBase {
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


export class ListInteractionChannelListInteractionChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels", elemType: shared.FlexV1InteractionInteractionChannel })
  channels?: shared.FlexV1InteractionInteractionChannel[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListInteractionChannelListInteractionChannelResponseMeta;
}


export class ListInteractionChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListInteractionChannelPathParams;

  @SpeakeasyMetadata()
  queryParams: ListInteractionChannelQueryParams;

  @SpeakeasyMetadata()
  security: ListInteractionChannelSecurity;
}


export class ListInteractionChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listInteractionChannelResponse?: ListInteractionChannelListInteractionChannelResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
