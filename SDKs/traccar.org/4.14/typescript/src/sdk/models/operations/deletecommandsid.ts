import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCommandsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCommandsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCommandsIdPathParams;
}


export class DeleteCommandsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
