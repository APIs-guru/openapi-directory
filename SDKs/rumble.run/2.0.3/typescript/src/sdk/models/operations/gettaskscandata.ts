import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTaskScanDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;
}


export class GetTaskScanDataSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetTaskScanDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTaskScanDataPathParams;

  @Metadata()
  security: GetTaskScanDataSecurity;
}


export class GetTaskScanDataResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
