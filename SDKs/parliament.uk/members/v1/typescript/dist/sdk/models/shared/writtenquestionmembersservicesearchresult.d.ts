import { SpeakeasyBase } from "../../../internal/utils";
import { WrittenQuestionItem } from "./writtenquestionitem";
import { Link } from "./link";
export declare class WrittenQuestionMembersServiceSearchResult extends SpeakeasyBase {
    items?: WrittenQuestionItem[];
    links?: Link[];
    resultContext?: string;
    skip?: number;
    take?: number;
    totalResults?: number;
}
