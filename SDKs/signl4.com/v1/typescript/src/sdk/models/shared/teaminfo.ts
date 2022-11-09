import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=memberIds" })
  memberIds?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}
