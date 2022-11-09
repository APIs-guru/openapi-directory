import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveLocationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;
}


export class RetrieveLocationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveLocationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveLocationPathParams;

  @Metadata()
  security: RetrieveLocationSecurity;
}


export class RetrieveLocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveLocationResponse?: shared.RetrieveLocationResponse;

  @Metadata()
  statusCode: number;
}
