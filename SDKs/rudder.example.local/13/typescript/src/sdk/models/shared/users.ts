import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Users extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isPreHahed" })
  isPreHahed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string[];

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
