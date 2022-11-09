import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";


export class UserResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=user" })
  user: User;
}


export class UserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: UserResponseData;
}
