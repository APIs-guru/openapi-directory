import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAddressPathParams;
}


export class GetAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAddress200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
