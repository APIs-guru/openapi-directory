import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutMaintenanceIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutMaintenanceIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutMaintenanceIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Maintenance;
}


export class PutMaintenanceIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  maintenance?: shared.Maintenance;

  @Metadata()
  statusCode: number;
}
