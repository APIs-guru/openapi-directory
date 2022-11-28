import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlertsCloseAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class PostAlertsCloseAllRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  changeAlertStatusFilterInfo?: shared.ChangeAlertStatusFilterInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  changeAlertStatusFilterInfo1?: shared.ChangeAlertStatusFilterInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  changeAlertStatusFilterInfo2?: shared.ChangeAlertStatusFilterInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  changeAlertStatusFilterInfo3?: shared.ChangeAlertStatusFilterInfo;
}


export class PostAlertsCloseAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAlertsCloseAllQueryParams;

  @SpeakeasyMetadata()
  request?: PostAlertsCloseAllRequests;
}


export class PostAlertsCloseAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
