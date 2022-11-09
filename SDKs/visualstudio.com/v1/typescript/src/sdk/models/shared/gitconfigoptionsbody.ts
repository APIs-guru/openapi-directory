import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GitConfigOptionsBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=userEmail" })
  userEmail?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
