import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlertsReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetAlertsReportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAlertsReportQueryParams;
}


export class GetAlertsReportResponse extends SpeakeasyBase {
  @Metadata()
  alertReport?: shared.AlertReport;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
