import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
