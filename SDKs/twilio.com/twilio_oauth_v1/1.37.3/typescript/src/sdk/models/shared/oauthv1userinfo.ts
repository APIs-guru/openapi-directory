import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OauthV1UserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=user_sid" })
  userSid?: string;
}
