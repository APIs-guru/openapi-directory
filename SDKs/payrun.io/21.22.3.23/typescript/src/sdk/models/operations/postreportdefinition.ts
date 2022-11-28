import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostReportDefinitionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostReportDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostReportDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReportDefinition;
}


export class PostReportDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  link?: shared.Link;

  @SpeakeasyMetadata()
  statusCode: number;
}
