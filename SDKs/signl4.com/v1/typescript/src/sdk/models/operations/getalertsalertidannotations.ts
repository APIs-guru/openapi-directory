import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlertsAlertIdAnnotationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class GetAlertsAlertIdAnnotationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAlertsAlertIdAnnotationsPathParams;
}


export class GetAlertsAlertIdAnnotationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AlertAnnotationInfo })
  alertAnnotationInfos?: shared.AlertAnnotationInfo[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
