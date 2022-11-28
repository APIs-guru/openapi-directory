import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegisteredInterestCategory } from "./registeredinterestcategory";
import { Member } from "./member";



export class MembersInterests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interestCategories", elemType: RegisteredInterestCategory })
  interestCategories?: RegisteredInterestCategory[];

  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: Member;
}
