import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;
}


export class UpdateTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTaskPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Task;

  @SpeakeasyMetadata()
  security: UpdateTaskSecurity;
}


export class UpdateTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  task?: shared.Task;
}
