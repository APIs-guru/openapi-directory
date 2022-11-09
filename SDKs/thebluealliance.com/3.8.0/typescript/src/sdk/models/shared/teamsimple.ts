import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=nickname" })
  nickname?: string;

  @Metadata({ data: "json, name=state_prov" })
  stateProv?: string;

  @Metadata({ data: "json, name=team_number" })
  teamNumber: number;
}
