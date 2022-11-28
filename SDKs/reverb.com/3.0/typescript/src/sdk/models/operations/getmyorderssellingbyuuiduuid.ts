import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMyOrdersSellingByUuidUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class GetMyOrdersSellingByUuidUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyOrdersSellingByUuidUuidPathParams;
}


export class GetMyOrdersSellingByUuidUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
