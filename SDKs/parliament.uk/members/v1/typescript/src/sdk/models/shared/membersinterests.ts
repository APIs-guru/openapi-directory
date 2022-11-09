import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegisteredInterestCategory } from "./registeredinterestcategory";
import { Member } from "./member";


export class MembersInterests extends SpeakeasyBase {
  @Metadata({ data: "json, name=interestCategories", elemType: shared.RegisteredInterestCategory })
  interestCategories?: RegisteredInterestCategory[];

  @Metadata({ data: "json, name=member" })
  member?: Member;
}
