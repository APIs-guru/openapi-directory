import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectNowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class CollectNowQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monitorClass" })
  monitorClass: string;
}


export class CollectNowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectNowPathParams;

  @SpeakeasyMetadata()
  queryParams: CollectNowQueryParams;
}


export class CollectNowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
