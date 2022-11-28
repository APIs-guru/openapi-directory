import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventSourceEndpointInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastEventRaised" })
  lastEventRaised?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}
