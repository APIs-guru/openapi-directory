import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutReportDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReportDefinitionId" })
  reportDefinitionId: string;
}


export class PutReportDefinitionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutReportDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutReportDefinitionPathParams;

  @SpeakeasyMetadata()
  headers: PutReportDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReportDefinition;
}


export class PutReportDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  reportDefinition?: shared.ReportDefinition;

  @SpeakeasyMetadata()
  statusCode: number;
}
