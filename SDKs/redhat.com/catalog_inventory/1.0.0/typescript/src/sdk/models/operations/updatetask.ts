import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTaskPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TaskInput;
}


export class UpdateTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  statusCode: number;
}
