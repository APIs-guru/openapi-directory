import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostEventsPagedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;
}


export class PostEventsPagedRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  eventFilter?: shared.EventFilter;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  eventFilter1?: shared.EventFilter;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  eventFilter2?: shared.EventFilter;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  eventFilter3?: shared.EventFilter;
}


export class PostEventsPagedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostEventsPagedQueryParams;

  @SpeakeasyMetadata()
  request?: PostEventsPagedRequests;
}


export class PostEventsPagedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  overviewEventPagedResultsPublic?: shared.OverviewEventPagedResultsPublic;

  @SpeakeasyMetadata()
  statusCode: number;
}
