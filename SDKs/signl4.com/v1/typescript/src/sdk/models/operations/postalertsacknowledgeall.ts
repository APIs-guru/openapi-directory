import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlertsAcknowledgeAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class PostAlertsAcknowledgeAllRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  changeAlertStatusFilterInfo?: shared.ChangeAlertStatusFilterInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  changeAlertStatusFilterInfo1?: shared.ChangeAlertStatusFilterInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  changeAlertStatusFilterInfo2?: shared.ChangeAlertStatusFilterInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  changeAlertStatusFilterInfo3?: shared.ChangeAlertStatusFilterInfo;
}


export class PostAlertsAcknowledgeAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAlertsAcknowledgeAllQueryParams;

  @SpeakeasyMetadata()
  request?: PostAlertsAcknowledgeAllRequests;
}


export class PostAlertsAcknowledgeAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
