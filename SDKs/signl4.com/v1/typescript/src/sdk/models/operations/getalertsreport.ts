import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlertsReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetAlertsReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAlertsReportQueryParams;
}


export class GetAlertsReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alertReport?: shared.AlertReport;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
