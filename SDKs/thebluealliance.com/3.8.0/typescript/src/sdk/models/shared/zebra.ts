import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ZebraTeam } from "./zebrateam";
import { ZebraTeam } from "./zebrateam";


export class ZebraAlliances extends SpeakeasyBase {
  @Metadata({ data: "json, name=blue", elemType: shared.ZebraTeam })
  blue?: ZebraTeam[];

  @Metadata({ data: "json, name=red", elemType: shared.ZebraTeam })
  red?: ZebraTeam[];
}


export class Zebra extends SpeakeasyBase {
  @Metadata({ data: "json, name=alliances" })
  alliances: ZebraAlliances;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=times" })
  times: number[];
}
