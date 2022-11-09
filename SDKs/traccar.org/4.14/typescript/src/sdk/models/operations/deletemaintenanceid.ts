import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMaintenanceIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteMaintenanceIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMaintenanceIdPathParams;
}


export class DeleteMaintenanceIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
