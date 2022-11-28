import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTimezoneAreaLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=area" })
  area: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;
}


export class GetTimezoneAreaLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimezoneAreaLocationPathParams;
}


export class GetTimezoneAreaLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dateTimeJsonResponse?: any;

  @SpeakeasyMetadata()
  errorJsonResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
