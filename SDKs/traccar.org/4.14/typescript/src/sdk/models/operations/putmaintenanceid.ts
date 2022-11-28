import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutMaintenanceIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutMaintenanceIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutMaintenanceIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Maintenance;
}


export class PutMaintenanceIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  maintenance?: shared.Maintenance;

  @SpeakeasyMetadata()
  statusCode: number;
}
