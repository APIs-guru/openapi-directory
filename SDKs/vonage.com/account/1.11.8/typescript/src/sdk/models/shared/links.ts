import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstHref } from "./firsthref";
import { LastHref } from "./lasthref";
import { NextHref } from "./nexthref";
import { PrevHref } from "./prevhref";
import { SelfHref } from "./selfhref";



export class Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: FirstHref;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: LastHref;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: NextHref;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: PrevHref;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: SelfHref;
}
