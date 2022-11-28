import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHolidaySchemeRevisionByNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" })
  holidaySchemeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RevisionNumber" })
  revisionNumber: string;
}


export class GetHolidaySchemeRevisionByNumberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetHolidaySchemeRevisionByNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHolidaySchemeRevisionByNumberPathParams;

  @SpeakeasyMetadata()
  headers: GetHolidaySchemeRevisionByNumberHeaders;
}


export class GetHolidaySchemeRevisionByNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  holidayScheme?: shared.HolidayScheme;

  @SpeakeasyMetadata()
  statusCode: number;
}
