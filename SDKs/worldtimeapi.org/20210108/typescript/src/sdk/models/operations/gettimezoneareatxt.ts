import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTimezoneAreaTxtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=area" })
  area: string;
}


export class GetTimezoneAreaTxtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimezoneAreaTxtPathParams;
}


export class GetTimezoneAreaTxtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorTextResponse?: string;

  @SpeakeasyMetadata()
  listTextResponse?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
