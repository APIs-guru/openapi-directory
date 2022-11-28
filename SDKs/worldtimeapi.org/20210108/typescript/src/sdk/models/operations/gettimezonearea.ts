import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTimezoneAreaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=area" })
  area: string;
}


export class GetTimezoneAreaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimezoneAreaPathParams;
}


export class GetTimezoneAreaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorJsonResponse?: any;

  @SpeakeasyMetadata()
  listJsonResponse?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
