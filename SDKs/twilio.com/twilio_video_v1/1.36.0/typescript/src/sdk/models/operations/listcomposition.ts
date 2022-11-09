import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCOMPOSITION_SERVERS = [
	"https://video.twilio.com",
];



export class ListCompositionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" })
  dateCreatedBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoomSid" })
  roomSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.CompositionEnumStatusEnum;
}


export class ListCompositionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCompositionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListCompositionQueryParams;

  @Metadata()
  security: ListCompositionSecurity;
}


export class ListCompositionListCompositionResponseMeta extends SpeakeasyBase {
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


export class ListCompositionListCompositionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=compositions", elemType: shared.VideoV1Composition })
  compositions?: shared.VideoV1Composition[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListCompositionListCompositionResponseMeta;
}


export class ListCompositionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCompositionResponse?: ListCompositionListCompositionResponse;

  @Metadata()
  statusCode: number;
}
