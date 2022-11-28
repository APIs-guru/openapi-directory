import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=memberIds" })
  memberIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}
