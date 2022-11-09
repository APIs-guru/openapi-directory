import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FirstHref } from "./firsthref";
import { NextHref } from "./nexthref";
import { PrevHref } from "./prevhref";
import { SelfHref } from "./selfhref";
export declare class Links extends SpeakeasyBase {
    first?: FirstHref;
    next?: NextHref;
    prev?: PrevHref;
    self?: SelfHref;
}
