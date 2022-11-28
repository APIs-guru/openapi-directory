import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDriversIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteDriversIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDriversIdPathParams;
}


export class DeleteDriversIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
