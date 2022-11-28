import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCommandsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCommandsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCommandsIdPathParams;
}


export class DeleteCommandsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
