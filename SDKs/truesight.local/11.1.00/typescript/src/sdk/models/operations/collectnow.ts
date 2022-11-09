import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectNowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class CollectNowQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=monitorClass" })
  monitorClass: string;
}


export class CollectNowRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectNowPathParams;

  @Metadata()
  queryParams: CollectNowQueryParams;
}


export class CollectNowResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
