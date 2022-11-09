import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ZebraTeam extends SpeakeasyBase {
  @Metadata({ data: "json, name=team_key" })
  teamKey: string;

  @Metadata({ data: "json, name=xs" })
  xs: number[];

  @Metadata({ data: "json, name=ys" })
  ys: number[];
}
