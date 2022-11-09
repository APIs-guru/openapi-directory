import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=report_id" })
  reportId: string;
}


export class GetReportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetReportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReportPathParams;

  @Metadata()
  security: GetReportSecurity;
}


export class GetReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  reportOutput?: shared.ReportOutput;

  @Metadata()
  statusCode: number;
}
