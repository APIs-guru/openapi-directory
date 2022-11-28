import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTimezoneAreaLocationTxtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=area" })
  area: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;
}


export class GetTimezoneAreaLocationTxtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimezoneAreaLocationTxtPathParams;
}


export class GetTimezoneAreaLocationTxtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dateTimeTextResponse?: string;

  @SpeakeasyMetadata()
  errorTextResponse?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
