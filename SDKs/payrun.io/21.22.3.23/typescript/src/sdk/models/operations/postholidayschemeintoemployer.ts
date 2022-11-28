import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostHolidaySchemeIntoEmployerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PostHolidaySchemeIntoEmployerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostHolidaySchemeIntoEmployerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostHolidaySchemeIntoEmployerPathParams;

  @SpeakeasyMetadata()
  headers: PostHolidaySchemeIntoEmployerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.HolidayScheme;
}


export class PostHolidaySchemeIntoEmployerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  link?: shared.Link;

  @SpeakeasyMetadata()
  statusCode: number;
}
