import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { User } from "./user";


export class UsersEmbeddedObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.User })
  data?: User[];
}
