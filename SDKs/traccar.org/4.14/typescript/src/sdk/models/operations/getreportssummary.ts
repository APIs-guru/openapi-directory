import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportsSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class GetReportsSummaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReportsSummaryQueryParams;
}


export class GetReportsSummaryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ReportSummary })
  reportSummaries?: shared.ReportSummary[];

  @Metadata()
  statusCode: number;
}
