import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAlertsCloseAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class PostAlertsCloseAllRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  changeAlertStatusFilterInfo?: shared.ChangeAlertStatusFilterInfo;

  @Metadata({ data: "request, media_type=application/json" })
  changeAlertStatusFilterInfo1?: shared.ChangeAlertStatusFilterInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  changeAlertStatusFilterInfo2?: shared.ChangeAlertStatusFilterInfo;

  @Metadata({ data: "request, media_type=text/json" })
  changeAlertStatusFilterInfo3?: shared.ChangeAlertStatusFilterInfo;
}


export class PostAlertsCloseAllRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAlertsCloseAllQueryParams;

  @Metadata()
  request?: PostAlertsCloseAllRequests;
}


export class PostAlertsCloseAllResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
