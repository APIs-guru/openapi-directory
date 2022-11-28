import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHolidaySchemeByEffectiveDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EffectiveDate" })
  effectiveDate: Date;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" })
  holidaySchemeId: string;
}


export class GetHolidaySchemeByEffectiveDateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetHolidaySchemeByEffectiveDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHolidaySchemeByEffectiveDatePathParams;

  @SpeakeasyMetadata()
  headers: GetHolidaySchemeByEffectiveDateHeaders;
}


export class GetHolidaySchemeByEffectiveDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  holidayScheme?: shared.HolidayScheme;

  @SpeakeasyMetadata()
  statusCode: number;
}
