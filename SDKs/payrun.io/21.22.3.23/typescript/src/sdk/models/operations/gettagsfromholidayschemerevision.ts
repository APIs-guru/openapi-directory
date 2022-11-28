import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTagsFromHolidaySchemeRevisionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EffectiveDate" })
  effectiveDate: Date;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" })
  holidaySchemeId: string;
}


export class GetTagsFromHolidaySchemeRevisionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTagsFromHolidaySchemeRevisionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagsFromHolidaySchemeRevisionPathParams;

  @SpeakeasyMetadata()
  headers: GetTagsFromHolidaySchemeRevisionHeaders;
}


export class GetTagsFromHolidaySchemeRevisionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  linkCollection?: shared.LinkCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
