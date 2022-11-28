import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MemberFocus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=focus" })
  focus?: string[];
}
