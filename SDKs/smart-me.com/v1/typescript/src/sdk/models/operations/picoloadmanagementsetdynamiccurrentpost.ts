import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PicoLoadmanagementSetDynamicCurrentPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: number;
}


export class PicoLoadmanagementSetDynamicCurrentPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=current" })
  current: number;
}


export class PicoLoadmanagementSetDynamicCurrentPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PicoLoadmanagementSetDynamicCurrentPostPathParams;

  @SpeakeasyMetadata()
  queryParams: PicoLoadmanagementSetDynamicCurrentPostQueryParams;
}


export class PicoLoadmanagementSetDynamicCurrentPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
