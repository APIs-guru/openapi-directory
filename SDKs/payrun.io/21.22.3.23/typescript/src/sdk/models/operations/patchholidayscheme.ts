import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchHolidaySchemePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" })
  holidaySchemeId: string;
}


export class PatchHolidaySchemeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PatchHolidaySchemeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchHolidaySchemePathParams;

  @Metadata()
  headers: PatchHolidaySchemeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.HolidayScheme;
}


export class PatchHolidaySchemeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  holidayScheme?: shared.HolidayScheme;

  @Metadata()
  statusCode: number;
}
