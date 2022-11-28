import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteMyAddressesAddressIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address_id" })
  addressId: string;
}


export class DeleteMyAddressesAddressIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyAddressesAddressIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMyAddressesAddressIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteMyAddressesAddressIdSecurity;
}


export class DeleteMyAddressesAddressIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
