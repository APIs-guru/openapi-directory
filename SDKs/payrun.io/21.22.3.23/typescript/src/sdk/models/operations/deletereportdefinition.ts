import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteReportDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ReportDefinitionId" })
  reportDefinitionId: string;
}


export class DeleteReportDefinitionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class DeleteReportDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteReportDefinitionPathParams;

  @Metadata()
  headers: DeleteReportDefinitionHeaders;
}


export class DeleteReportDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
