import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";


export class UserEmbeddedObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: User;
}
