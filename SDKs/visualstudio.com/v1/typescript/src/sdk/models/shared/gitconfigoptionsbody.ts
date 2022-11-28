import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GitConfigOptionsBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userEmail" })
  userEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
