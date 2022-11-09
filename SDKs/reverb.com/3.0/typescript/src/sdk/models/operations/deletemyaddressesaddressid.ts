import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteMyAddressesAddressIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address_id" })
  addressId: string;
}


export class DeleteMyAddressesAddressIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyAddressesAddressIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMyAddressesAddressIdPathParams;

  @Metadata()
  security: DeleteMyAddressesAddressIdSecurity;
}


export class DeleteMyAddressesAddressIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
