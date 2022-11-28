import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUserUsernamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


// GetUserUsername200ApplicationJsonAddress
/** 
 * The user's preferred postal address.
**/
export class GetUserUsername200ApplicationJsonAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=formatted" })
  formatted?: string;

  @SpeakeasyMetadata({ data: "json, name=locality" })
  locality?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=street_address" })
  streetAddress?: string;
}


export class GetUserUsername200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@id" })
  atId?: string;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: GetUserUsername200ApplicationJsonAddress;

  @SpeakeasyMetadata({ data: "json, name=birthdate" })
  birthdate?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=email_verified" })
  emailVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=family_name" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=given_name" })
  givenName?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=me" })
  me?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number_verified" })
  phoneNumberVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=picture" })
  picture?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_username" })
  preferredUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: string;

  @SpeakeasyMetadata({ data: "json, name=sub" })
  sub: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=webmail" })
  webmail?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;

  @SpeakeasyMetadata({ data: "json, name=zoneinfo" })
  zoneinfo?: string;
}


export class GetUserUsernameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserUsernamePathParams;
}


export class GetUserUsernameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUserUsername200ApplicationJsonObject?: GetUserUsername200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
