import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportOutputPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReportDefinitionId" })
  reportDefinitionId: string;
}


export class GetReportOutputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetReportOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReportOutputPathParams;

  @SpeakeasyMetadata()
  headers: GetReportOutputHeaders;
}


export class GetReportOutputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  getReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
