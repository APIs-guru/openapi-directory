import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirstHref } from "./firsthref";
import { LastHref } from "./lasthref";
import { NextHref } from "./nexthref";
import { PrevHref } from "./prevhref";
import { SelfHref } from "./selfhref";


export class Links extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: FirstHref;

  @Metadata({ data: "json, name=last" })
  last?: LastHref;

  @Metadata({ data: "json, name=next" })
  next?: NextHref;

  @Metadata({ data: "json, name=prev" })
  prev?: PrevHref;

  @Metadata({ data: "json, name=self" })
  self?: SelfHref;
}
