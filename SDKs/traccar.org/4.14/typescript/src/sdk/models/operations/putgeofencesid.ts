import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutGeofencesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutGeofencesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutGeofencesIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Geofence;
}


export class PutGeofencesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  geofence?: shared.Geofence;

  @Metadata()
  statusCode: number;
}
