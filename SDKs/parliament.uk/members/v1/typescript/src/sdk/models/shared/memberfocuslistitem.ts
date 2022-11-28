import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { MemberFocus } from "./memberfocus";



export class MemberFocusListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=value", elemType: MemberFocus })
  value?: MemberFocus[];
}
