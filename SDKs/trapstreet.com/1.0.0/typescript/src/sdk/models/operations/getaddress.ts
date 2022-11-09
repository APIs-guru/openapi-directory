import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAddressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAddressPathParams;
}


export class GetAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAddress200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
