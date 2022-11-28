import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMyOrdersBuyingByUuidUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class GetMyOrdersBuyingByUuidUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyOrdersBuyingByUuidUuidPathParams;
}


export class GetMyOrdersBuyingByUuidUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
