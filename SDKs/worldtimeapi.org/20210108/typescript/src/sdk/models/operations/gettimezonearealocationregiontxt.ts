import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTimezoneAreaLocationRegionTxtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=area" })
  area: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" })
  region: string;
}


export class GetTimezoneAreaLocationRegionTxtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimezoneAreaLocationRegionTxtPathParams;
}


export class GetTimezoneAreaLocationRegionTxtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dateTimeTextResponse?: string;

  @SpeakeasyMetadata()
  errorTextResponse?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
