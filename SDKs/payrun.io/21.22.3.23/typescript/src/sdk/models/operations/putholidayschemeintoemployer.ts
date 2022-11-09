import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutHolidaySchemeIntoEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" })
  holidaySchemeId: string;
}


export class PutHolidaySchemeIntoEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutHolidaySchemeIntoEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutHolidaySchemeIntoEmployerPathParams;

  @Metadata()
  headers: PutHolidaySchemeIntoEmployerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.HolidayScheme;
}


export class PutHolidaySchemeIntoEmployerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  holidayScheme?: shared.HolidayScheme;

  @Metadata()
  statusCode: number;
}
