import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTaskPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Task;
}


export class UpdateTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  statusCode: number;
}
