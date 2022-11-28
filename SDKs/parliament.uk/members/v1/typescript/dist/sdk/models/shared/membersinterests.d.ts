import { SpeakeasyBase } from "../../../internal/utils";
import { RegisteredInterestCategory } from "./registeredinterestcategory";
import { Member } from "./member";
export declare class MembersInterests extends SpeakeasyBase {
    interestCategories?: RegisteredInterestCategory[];
    member?: Member;
}
