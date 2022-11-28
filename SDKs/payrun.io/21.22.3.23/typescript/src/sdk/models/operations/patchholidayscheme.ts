import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchHolidaySchemePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" })
  holidaySchemeId: string;
}


export class PatchHolidaySchemeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PatchHolidaySchemeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchHolidaySchemePathParams;

  @SpeakeasyMetadata()
  headers: PatchHolidaySchemeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.HolidayScheme;
}


export class PatchHolidaySchemeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  holidayScheme?: shared.HolidayScheme;

  @SpeakeasyMetadata()
  statusCode: number;
}
