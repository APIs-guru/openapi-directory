import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventSourceEndpointInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=groupId" })
  groupId?: string;

  @Metadata({ data: "json, name=lastEventRaised" })
  lastEventRaised?: Date;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=teamId" })
  teamId?: string;

  @Metadata({ data: "json, name=type" })
  type?: number;
}
