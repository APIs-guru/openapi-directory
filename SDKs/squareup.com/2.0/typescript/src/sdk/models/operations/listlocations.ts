import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListLocationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListLocationsRequest extends SpeakeasyBase {
  @Metadata()
  security: ListLocationsSecurity;
}


export class ListLocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listLocationsResponse?: shared.ListLocationsResponse;

  @Metadata()
  statusCode: number;
}
