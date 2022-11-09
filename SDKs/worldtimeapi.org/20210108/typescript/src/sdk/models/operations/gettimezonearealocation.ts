import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTimezoneAreaLocationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=area" })
  area: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;
}


export class GetTimezoneAreaLocationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTimezoneAreaLocationPathParams;
}


export class GetTimezoneAreaLocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dateTimeJsonResponse?: any;

  @Metadata()
  errorJsonResponse?: any;

  @Metadata()
  statusCode: number;
}
