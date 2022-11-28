import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportDefinitionFromApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReportDefinitionId" })
  reportDefinitionId: string;
}


export class GetReportDefinitionFromApplicationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetReportDefinitionFromApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReportDefinitionFromApplicationPathParams;

  @SpeakeasyMetadata()
  headers: GetReportDefinitionFromApplicationHeaders;
}


export class GetReportDefinitionFromApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  reportDefinition?: shared.ReportDefinition;

  @SpeakeasyMetadata()
  statusCode: number;
}
