import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserEnumStateTypeEnum } from "./userenumstatetypeenum";


export class FrontlineV1User extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar" })
  avatar?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=identity" })
  identity?: string;

  @Metadata({ data: "json, name=is_available" })
  isAvailable?: boolean;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=state" })
  state?: UserEnumStateTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
