import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ShowTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ShowTaskPathParams;
}


export class ShowTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  task?: shared.Task;
}
