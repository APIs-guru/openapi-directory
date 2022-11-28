import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDevicesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteDevicesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDevicesIdPathParams;
}


export class DeleteDevicesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
