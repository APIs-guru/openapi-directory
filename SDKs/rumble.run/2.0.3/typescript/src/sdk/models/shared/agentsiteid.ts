import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AgentSiteId extends SpeakeasyBase {
  @Metadata({ data: "json, name=site_id" })
  siteId: string;
}
