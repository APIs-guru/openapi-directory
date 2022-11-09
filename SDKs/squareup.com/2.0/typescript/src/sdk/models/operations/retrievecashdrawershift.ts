import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveCashDrawerShiftPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shift_id" })
  shiftId: string;
}


export class RetrieveCashDrawerShiftQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId: string;
}


export class RetrieveCashDrawerShiftSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveCashDrawerShiftRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveCashDrawerShiftPathParams;

  @Metadata()
  queryParams: RetrieveCashDrawerShiftQueryParams;

  @Metadata()
  security: RetrieveCashDrawerShiftSecurity;
}


export class RetrieveCashDrawerShiftResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveCashDrawerShiftResponse?: shared.RetrieveCashDrawerShiftResponse;

  @Metadata()
  statusCode: number;
}
