import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberItem } from "./memberitem";
import { HouseMembership } from "./housemembership";



export class ConstituencyRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: MemberItem;

  @SpeakeasyMetadata({ data: "json, name=representation" })
  representation?: HouseMembership;
}
