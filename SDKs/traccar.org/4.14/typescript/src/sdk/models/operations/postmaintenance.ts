import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMaintenanceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Maintenance;
}


export class PostMaintenanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  maintenance?: shared.Maintenance;

  @Metadata()
  statusCode: number;
}
