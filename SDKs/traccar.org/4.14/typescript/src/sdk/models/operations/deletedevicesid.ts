import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDevicesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteDevicesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDevicesIdPathParams;
}


export class DeleteDevicesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
