import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListFlowRevisionServerList = [
	"https://studio.twilio.com",
] as const;


export class ListFlowRevisionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class ListFlowRevisionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFlowRevisionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFlowRevisionListFlowRevisionResponseMeta extends SpeakeasyBase {
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


export class ListFlowRevisionListFlowRevisionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListFlowRevisionListFlowRevisionResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=revisions", elemType: shared.StudioV2FlowFlowRevision })
  revisions?: shared.StudioV2FlowFlowRevision[];
}


export class ListFlowRevisionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListFlowRevisionPathParams;

  @SpeakeasyMetadata()
  queryParams: ListFlowRevisionQueryParams;

  @SpeakeasyMetadata()
  security: ListFlowRevisionSecurity;
}


export class ListFlowRevisionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listFlowRevisionResponse?: ListFlowRevisionListFlowRevisionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
