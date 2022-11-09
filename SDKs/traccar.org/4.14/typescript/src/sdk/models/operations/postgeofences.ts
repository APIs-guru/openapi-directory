import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGeofencesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Geofence;
}


export class PostGeofencesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  geofence?: shared.Geofence;

  @Metadata()
  statusCode: number;
}
