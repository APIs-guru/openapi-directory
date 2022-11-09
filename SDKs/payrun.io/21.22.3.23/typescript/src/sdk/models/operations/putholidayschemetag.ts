import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutHolidaySchemeTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" })
  holidaySchemeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TagId" })
  tagId: string;
}


export class PutHolidaySchemeTagHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutHolidaySchemeTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutHolidaySchemeTagPathParams;

  @Metadata()
  headers: PutHolidaySchemeTagHeaders;
}


export class PutHolidaySchemeTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;

  @Metadata()
  tag?: shared.Tag;
}
