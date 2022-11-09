import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlertsAlertIdAnnotationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class GetAlertsAlertIdAnnotationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAlertsAlertIdAnnotationsPathParams;
}


export class GetAlertsAlertIdAnnotationsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AlertAnnotationInfo })
  alertAnnotationInfos?: shared.AlertAnnotationInfo[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
