import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlertsAlertIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class GetAlertsAlertIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAlertsAlertIdPathParams;
}


export class GetAlertsAlertIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alertInfo?: shared.AlertInfo;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
