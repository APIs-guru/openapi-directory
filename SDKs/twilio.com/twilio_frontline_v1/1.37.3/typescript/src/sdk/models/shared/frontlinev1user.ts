import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserEnumStateTypeEnum } from "./userenumstatetypeenum";



export class FrontlineV1User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar" })
  avatar?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "json, name=is_available" })
  isAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: UserEnumStateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
