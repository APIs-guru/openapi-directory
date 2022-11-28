import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportsSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class GetReportsSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportsSummaryQueryParams;
}


export class GetReportsSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ReportSummary })
  reportSummaries?: shared.ReportSummary[];

  @SpeakeasyMetadata()
  statusCode: number;
}
