import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MembersStaffItem } from "./membersstaffitem";
import { Link } from "./link";



export class MembersStaffMembersServiceSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: MembersStaffItem })
  items?: MembersStaffItem[];

  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=resultContext" })
  resultContext?: string;

  @SpeakeasyMetadata({ data: "json, name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "json, name=take" })
  take?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
