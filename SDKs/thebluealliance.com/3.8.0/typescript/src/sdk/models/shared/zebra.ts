import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ZebraTeam } from "./zebrateam";



export class ZebraAlliances extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blue", elemType: ZebraTeam })
  blue?: ZebraTeam[];

  @SpeakeasyMetadata({ data: "json, name=red", elemType: ZebraTeam })
  red?: ZebraTeam[];
}


export class Zebra extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alliances" })
  alliances: ZebraAlliances;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=times" })
  times: number[];
}
