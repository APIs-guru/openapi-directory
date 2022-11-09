import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;
}


export class StopTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class StopTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopTaskPathParams;

  @Metadata()
  security: StopTaskSecurity;
}


export class StopTaskResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
