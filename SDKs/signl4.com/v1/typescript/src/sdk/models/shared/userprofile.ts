import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
