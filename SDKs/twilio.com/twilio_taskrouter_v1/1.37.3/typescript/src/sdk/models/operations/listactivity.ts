import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListActivityServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class ListActivityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListActivityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Available" })
  available?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListActivitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListActivityListActivityResponseMeta extends SpeakeasyBase {
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


export class ListActivityListActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities", elemType: shared.TaskrouterV1WorkspaceActivity })
  activities?: shared.TaskrouterV1WorkspaceActivity[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListActivityListActivityResponseMeta;
}


export class ListActivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListActivityPathParams;

  @SpeakeasyMetadata()
  queryParams: ListActivityQueryParams;

  @SpeakeasyMetadata()
  security: ListActivitySecurity;
}


export class ListActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listActivityResponse?: ListActivityListActivityResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
