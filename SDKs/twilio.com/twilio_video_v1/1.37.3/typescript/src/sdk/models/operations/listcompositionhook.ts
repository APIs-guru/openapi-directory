import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListCompositionHookServerList = [
	"https://video.twilio.com",
] as const;


export class ListCompositionHookQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" })
  dateCreatedBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCompositionHookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCompositionHookListCompositionHookResponseMeta extends SpeakeasyBase {
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


export class ListCompositionHookListCompositionHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=composition_hooks", elemType: shared.VideoV1CompositionHook })
  compositionHooks?: shared.VideoV1CompositionHook[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListCompositionHookListCompositionHookResponseMeta;
}


export class ListCompositionHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListCompositionHookQueryParams;

  @SpeakeasyMetadata()
  security: ListCompositionHookSecurity;
}


export class ListCompositionHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCompositionHookResponse?: ListCompositionHookListCompositionHookResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
