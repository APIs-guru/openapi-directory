import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveBusinessBookingProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveBusinessBookingProfileRequest extends SpeakeasyBase {
  @Metadata()
  security: RetrieveBusinessBookingProfileSecurity;
}


export class RetrieveBusinessBookingProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveBusinessBookingProfileResponse?: shared.RetrieveBusinessBookingProfileResponse;

  @Metadata()
  statusCode: number;
}
