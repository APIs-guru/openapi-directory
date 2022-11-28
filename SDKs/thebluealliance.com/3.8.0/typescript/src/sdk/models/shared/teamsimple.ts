import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=state_prov" })
  stateProv?: string;

  @SpeakeasyMetadata({ data: "json, name=team_number" })
  teamNumber: number;
}
