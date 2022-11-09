import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportDefinitionFromApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ReportDefinitionId" })
  reportDefinitionId: string;
}


export class GetReportDefinitionFromApplicationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetReportDefinitionFromApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReportDefinitionFromApplicationPathParams;

  @Metadata()
  headers: GetReportDefinitionFromApplicationHeaders;
}


export class GetReportDefinitionFromApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  reportDefinition?: shared.ReportDefinition;

  @Metadata()
  statusCode: number;
}
