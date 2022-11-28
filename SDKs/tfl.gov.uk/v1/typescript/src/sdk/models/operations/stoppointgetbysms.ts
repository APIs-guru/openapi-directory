import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopPointGetBySmsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StopPointGetBySmsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=output" })
  output?: string;
}


export class StopPointGetBySmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointGetBySmsPathParams;

  @SpeakeasyMetadata()
  queryParams: StopPointGetBySmsQueryParams;
}


export class StopPointGetBySmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
