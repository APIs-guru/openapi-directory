import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostHolidaySchemeIntoEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PostHolidaySchemeIntoEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostHolidaySchemeIntoEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostHolidaySchemeIntoEmployerPathParams;

  @Metadata()
  headers: PostHolidaySchemeIntoEmployerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.HolidayScheme;
}


export class PostHolidaySchemeIntoEmployerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  link?: shared.Link;

  @Metadata()
  statusCode: number;
}
