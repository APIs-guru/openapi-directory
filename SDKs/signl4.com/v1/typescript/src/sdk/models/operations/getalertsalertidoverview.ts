import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlertsAlertIdOverviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class GetAlertsAlertIdOverviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAlertsAlertIdOverviewPathParams;
}


export class GetAlertsAlertIdOverviewResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  overviewAlert?: shared.OverviewAlert;

  @Metadata()
  statusCode: number;
}
