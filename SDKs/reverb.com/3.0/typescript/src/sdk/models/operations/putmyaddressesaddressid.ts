import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutMyAddressesAddressIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address_id" })
  addressId: string;
}


export class PutMyAddressesAddressIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutMyAddressesAddressIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutMyAddressesAddressIdPathParams;

  @Metadata()
  security: PutMyAddressesAddressIdSecurity;
}


export class PutMyAddressesAddressIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
