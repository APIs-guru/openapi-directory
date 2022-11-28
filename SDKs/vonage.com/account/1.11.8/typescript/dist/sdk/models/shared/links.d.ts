import { SpeakeasyBase } from "../../../internal/utils";
import { FirstHref } from "./firsthref";
import { LastHref } from "./lasthref";
import { NextHref } from "./nexthref";
import { PrevHref } from "./prevhref";
import { SelfHref } from "./selfhref";
export declare class Links extends SpeakeasyBase {
    first?: FirstHref;
    last?: LastHref;
    next?: NextHref;
    prev?: PrevHref;
    self?: SelfHref;
}
