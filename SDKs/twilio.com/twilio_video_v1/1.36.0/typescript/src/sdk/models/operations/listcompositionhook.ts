import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCOMPOSITIONHOOK_SERVERS = [
	"https://video.twilio.com",
];



export class ListCompositionHookQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" })
  dateCreatedBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCompositionHookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCompositionHookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListCompositionHookQueryParams;

  @Metadata()
  security: ListCompositionHookSecurity;
}


export class ListCompositionHookListCompositionHookResponseMeta extends SpeakeasyBase {
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


export class ListCompositionHookListCompositionHookResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=composition_hooks", elemType: shared.VideoV1CompositionHook })
  compositionHooks?: shared.VideoV1CompositionHook[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListCompositionHookListCompositionHookResponseMeta;
}


export class ListCompositionHookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCompositionHookResponse?: ListCompositionHookListCompositionHookResponse;

  @Metadata()
  statusCode: number;
}
