import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutGeofencesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutGeofencesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutGeofencesIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Geofence;
}


export class PutGeofencesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  geofence?: shared.Geofence;

  @SpeakeasyMetadata()
  statusCode: number;
}
