import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTimezoneAreaLocationRegionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=area" })
  area: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=region" })
  region: string;
}


export class GetTimezoneAreaLocationRegionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTimezoneAreaLocationRegionPathParams;
}


export class GetTimezoneAreaLocationRegionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dateTimeJsonResponse?: any;

  @Metadata()
  errorJsonResponse?: any;

  @Metadata()
  statusCode: number;
}
