import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MemberFocus extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=focus" })
  focus?: string[];
}
