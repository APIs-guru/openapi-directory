import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutMyAddressesAddressIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address_id" })
  addressId: string;
}


export class PutMyAddressesAddressIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutMyAddressesAddressIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutMyAddressesAddressIdPathParams;

  @SpeakeasyMetadata()
  security: PutMyAddressesAddressIdSecurity;
}


export class PutMyAddressesAddressIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
