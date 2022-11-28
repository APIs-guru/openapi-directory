import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlertsPagedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class PostAlertsPagedRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  alertFilterPublic?: shared.AlertFilterPublic;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  alertFilterPublic1?: shared.AlertFilterPublic;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  alertFilterPublic2?: shared.AlertFilterPublic;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  alertFilterPublic3?: shared.AlertFilterPublic;
}


export class PostAlertsPagedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAlertsPagedQueryParams;

  @SpeakeasyMetadata()
  request?: PostAlertsPagedRequests;
}


export class PostAlertsPagedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  overviewAlertPagedResultsPublic?: shared.OverviewAlertPagedResultsPublic;

  @SpeakeasyMetadata()
  statusCode: number;
}
