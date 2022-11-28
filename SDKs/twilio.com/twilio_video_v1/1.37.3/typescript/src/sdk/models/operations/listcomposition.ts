import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListCompositionServerList = [
	"https://video.twilio.com",
] as const;


export class ListCompositionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" })
  dateCreatedBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoomSid" })
  roomSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.CompositionEnumStatusEnum;
}


export class ListCompositionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCompositionListCompositionResponseMeta extends SpeakeasyBase {
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


export class ListCompositionListCompositionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compositions", elemType: shared.VideoV1Composition })
  compositions?: shared.VideoV1Composition[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListCompositionListCompositionResponseMeta;
}


export class ListCompositionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListCompositionQueryParams;

  @SpeakeasyMetadata()
  security: ListCompositionSecurity;
}


export class ListCompositionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCompositionResponse?: ListCompositionListCompositionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
