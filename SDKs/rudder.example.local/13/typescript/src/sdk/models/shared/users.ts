import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Users extends SpeakeasyBase {
  @Metadata({ data: "json, name=isPreHahed" })
  isPreHahed?: boolean;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=role" })
  role?: string[];

  @Metadata({ data: "json, name=username" })
  username?: string;
}
