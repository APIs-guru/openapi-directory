import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTaskChangeReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;
}


export class GetTaskChangeReportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetTaskChangeReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaskChangeReportPathParams;

  @SpeakeasyMetadata()
  security: GetTaskChangeReportSecurity;
}


export class GetTaskChangeReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
