import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllHolidaySchemeTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetAllHolidaySchemeTagsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetAllHolidaySchemeTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllHolidaySchemeTagsPathParams;

  @Metadata()
  headers: GetAllHolidaySchemeTagsHeaders;
}


export class GetAllHolidaySchemeTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  linkCollection?: shared.LinkCollection;

  @Metadata()
  statusCode: number;
}
