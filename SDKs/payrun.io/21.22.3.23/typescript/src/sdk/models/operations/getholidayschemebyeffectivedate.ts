import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHolidaySchemeByEffectiveDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EffectiveDate" })
  effectiveDate: Date;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" })
  holidaySchemeId: string;
}


export class GetHolidaySchemeByEffectiveDateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetHolidaySchemeByEffectiveDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHolidaySchemeByEffectiveDatePathParams;

  @Metadata()
  headers: GetHolidaySchemeByEffectiveDateHeaders;
}


export class GetHolidaySchemeByEffectiveDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  holidayScheme?: shared.HolidayScheme;

  @Metadata()
  statusCode: number;
}
