import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchShiftsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchShiftsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchShiftsRequest;

  @Metadata()
  security: SearchShiftsSecurity;
}


export class SearchShiftsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchShiftsResponse?: shared.SearchShiftsResponse;

  @Metadata()
  statusCode: number;
}
