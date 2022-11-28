import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



export class UsersEmbeddedObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: User })
  data?: User[];
}
