import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionInfoBody } from "./connectioninfobody";
import { ContainerInfoBody } from "./containerinfobody";
import { GitStatus } from "./gitstatus";
import { SeedInfoBody } from "./seedinfobody";
import { SubscriptionData } from "./subscriptiondata";



export class CloudEnvironmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: Date;

  @SpeakeasyMetadata({ data: "json, name=autoShutdownDelayMinutes" })
  autoShutdownDelayMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=connection" })
  connection?: ConnectionInfoBody;

  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: ContainerInfoBody;

  @SpeakeasyMetadata({ data: "json, name=containerImage" })
  containerImage?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=exportedBlobUrl" })
  exportedBlobUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=gitStatus" })
  gitStatus?: GitStatus;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastStateUpdateReason" })
  lastStateUpdateReason?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUsed" })
  lastUsed?: Date;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=planId" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "json, name=portForwardingConnection" })
  portForwardingConnection?: ConnectionInfoBody;

  @SpeakeasyMetadata({ data: "json, name=recentFolders" })
  recentFolders?: string[];

  @SpeakeasyMetadata({ data: "json, name=seed" })
  seed?: SeedInfoBody;

  @SpeakeasyMetadata({ data: "json, name=skuDisplayName" })
  skuDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=skuName" })
  skuName?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionData" })
  subscriptionData?: SubscriptionData;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
