import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ShowTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ShowTaskPathParams;
}


export class ShowTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  statusCode: number;

  @Metadata()
  task?: shared.Task;
}
