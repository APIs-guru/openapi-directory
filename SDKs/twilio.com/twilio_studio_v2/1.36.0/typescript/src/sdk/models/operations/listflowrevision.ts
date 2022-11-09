import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTFLOWREVISION_SERVERS = [
	"https://studio.twilio.com",
];



export class ListFlowRevisionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class ListFlowRevisionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFlowRevisionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFlowRevisionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListFlowRevisionPathParams;

  @Metadata()
  queryParams: ListFlowRevisionQueryParams;

  @Metadata()
  security: ListFlowRevisionSecurity;
}


export class ListFlowRevisionListFlowRevisionResponseMeta extends SpeakeasyBase {
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


export class ListFlowRevisionListFlowRevisionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListFlowRevisionListFlowRevisionResponseMeta;

  @Metadata({ data: "json, name=revisions", elemType: shared.StudioV2FlowFlowRevision })
  revisions?: shared.StudioV2FlowFlowRevision[];
}


export class ListFlowRevisionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFlowRevisionResponse?: ListFlowRevisionListFlowRevisionResponse;

  @Metadata()
  statusCode: number;
}
