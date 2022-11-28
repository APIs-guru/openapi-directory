import { SpeakeasyBase } from "../../../internal/utils";
import { EarlyDayMotionItem } from "./earlydaymotionitem";
import { Link } from "./link";
export declare class EarlyDayMotionMembersServiceSearchResult extends SpeakeasyBase {
    items?: EarlyDayMotionItem[];
    links?: Link[];
    resultContext?: string;
    skip?: number;
    take?: number;
    totalResults?: number;
}
