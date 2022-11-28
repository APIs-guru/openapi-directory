import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ZebraTeam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=team_key" })
  teamKey: string;

  @SpeakeasyMetadata({ data: "json, name=xs" })
  xs: number[];

  @SpeakeasyMetadata({ data: "json, name=ys" })
  ys: number[];
}
