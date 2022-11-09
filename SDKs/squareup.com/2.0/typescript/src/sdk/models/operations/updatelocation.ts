import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLocationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;
}


export class UpdateLocationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateLocationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLocationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateLocationRequest;

  @Metadata()
  security: UpdateLocationSecurity;
}


export class UpdateLocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateLocationResponse?: shared.UpdateLocationResponse;
}
