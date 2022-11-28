import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AgentSiteId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId: string;
}
