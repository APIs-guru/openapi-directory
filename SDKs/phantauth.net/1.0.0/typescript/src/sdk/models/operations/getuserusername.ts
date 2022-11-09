import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUserUsernamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetUserUsernameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserUsernamePathParams;
}


// GetUserUsername200ApplicationJsonAddress
/** 
 * The user's preferred postal address.
**/
export class GetUserUsername200ApplicationJsonAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=formatted" })
  formatted?: string;

  @Metadata({ data: "json, name=locality" })
  locality?: string;

  @Metadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=street_address" })
  streetAddress?: string;
}


export class GetUserUsername200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=@id" })
  atId?: string;

  @Metadata({ data: "json, name=address" })
  address?: GetUserUsername200ApplicationJsonAddress;

  @Metadata({ data: "json, name=birthdate" })
  birthdate?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=email_verified" })
  emailVerified?: boolean;

  @Metadata({ data: "json, name=family_name" })
  familyName?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=given_name" })
  givenName?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=me" })
  me?: string;

  @Metadata({ data: "json, name=middle_name" })
  middleName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nickname" })
  nickname?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=phone_number_verified" })
  phoneNumberVerified?: boolean;

  @Metadata({ data: "json, name=picture" })
  picture?: string;

  @Metadata({ data: "json, name=preferred_username" })
  preferredUsername?: string;

  @Metadata({ data: "json, name=profile" })
  profile?: string;

  @Metadata({ data: "json, name=sub" })
  sub: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: number;

  @Metadata({ data: "json, name=webmail" })
  webmail?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;

  @Metadata({ data: "json, name=zoneinfo" })
  zoneinfo?: string;
}


export class GetUserUsernameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getUserUsername200ApplicationJsonObject?: GetUserUsername200ApplicationJson;

  @Metadata()
  statusCode: number;
}
