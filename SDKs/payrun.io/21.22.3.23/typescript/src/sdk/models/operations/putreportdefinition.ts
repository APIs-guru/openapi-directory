import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutReportDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ReportDefinitionId" })
  reportDefinitionId: string;
}


export class PutReportDefinitionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutReportDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutReportDefinitionPathParams;

  @Metadata()
  headers: PutReportDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ReportDefinition;
}


export class PutReportDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  reportDefinition?: shared.ReportDefinition;

  @Metadata()
  statusCode: number;
}
