import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



export class UserEmbeddedObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: User;
}
