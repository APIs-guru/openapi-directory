import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateReportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class CreateReportRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.CreateReportInput;

  @Metadata()
  security: CreateReportSecurity;
}


export class CreateReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  reportOutput?: shared.ReportOutput;

  @Metadata()
  statusCode: number;
}
