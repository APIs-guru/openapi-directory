import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAlertsPagedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class PostAlertsPagedRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  alertFilterPublic?: shared.AlertFilterPublic;

  @Metadata({ data: "request, media_type=application/json" })
  alertFilterPublic1?: shared.AlertFilterPublic;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  alertFilterPublic2?: shared.AlertFilterPublic;

  @Metadata({ data: "request, media_type=text/json" })
  alertFilterPublic3?: shared.AlertFilterPublic;
}


export class PostAlertsPagedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAlertsPagedQueryParams;

  @Metadata()
  request?: PostAlertsPagedRequests;
}


export class PostAlertsPagedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  overviewAlertPagedResultsPublic?: shared.OverviewAlertPagedResultsPublic;

  @Metadata()
  statusCode: number;
}
