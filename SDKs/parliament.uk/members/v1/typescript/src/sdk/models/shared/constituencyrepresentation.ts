import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberItem } from "./memberitem";
import { HouseMembership } from "./housemembership";


export class ConstituencyRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=member" })
  member?: MemberItem;

  @Metadata({ data: "json, name=representation" })
  representation?: HouseMembership;
}
