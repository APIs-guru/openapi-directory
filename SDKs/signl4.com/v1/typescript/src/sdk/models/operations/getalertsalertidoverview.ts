import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlertsAlertIdOverviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class GetAlertsAlertIdOverviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAlertsAlertIdOverviewPathParams;
}


export class GetAlertsAlertIdOverviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  overviewAlert?: shared.OverviewAlert;

  @SpeakeasyMetadata()
  statusCode: number;
}
