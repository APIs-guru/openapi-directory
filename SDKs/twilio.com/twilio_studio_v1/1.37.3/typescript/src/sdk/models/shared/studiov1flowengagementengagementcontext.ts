import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StudioV1FlowEngagementEngagementContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: any;

  @SpeakeasyMetadata({ data: "json, name=engagement_sid" })
  engagementSid?: string;

  @SpeakeasyMetadata({ data: "json, name=flow_sid" })
  flowSid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
