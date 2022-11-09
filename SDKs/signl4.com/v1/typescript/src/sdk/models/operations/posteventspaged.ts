import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostEventsPagedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;
}


export class PostEventsPagedRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  eventFilter?: shared.EventFilter;

  @Metadata({ data: "request, media_type=application/json" })
  eventFilter1?: shared.EventFilter;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  eventFilter2?: shared.EventFilter;

  @Metadata({ data: "request, media_type=text/json" })
  eventFilter3?: shared.EventFilter;
}


export class PostEventsPagedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostEventsPagedQueryParams;

  @Metadata()
  request?: PostEventsPagedRequests;
}


export class PostEventsPagedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  overviewEventPagedResultsPublic?: shared.OverviewEventPagedResultsPublic;

  @Metadata()
  statusCode: number;
}
