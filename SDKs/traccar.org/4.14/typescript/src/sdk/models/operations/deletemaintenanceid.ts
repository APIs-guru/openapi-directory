import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMaintenanceIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteMaintenanceIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMaintenanceIdPathParams;
}


export class DeleteMaintenanceIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
