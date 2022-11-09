import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionInfoBody } from "./connectioninfobody";
import { ContainerInfoBody } from "./containerinfobody";
import { GitStatus } from "./gitstatus";
import { ConnectionInfoBody } from "./connectioninfobody";
import { SeedInfoBody } from "./seedinfobody";
import { SubscriptionData } from "./subscriptiondata";


export class UnfilteredCloudEnvironmentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=active" })
  active?: Date;

  @Metadata({ data: "json, name=autoShutdownDelayMinutes" })
  autoShutdownDelayMinutes?: number;

  @Metadata({ data: "json, name=connection" })
  connection?: ConnectionInfoBody;

  @Metadata({ data: "json, name=container" })
  container?: ContainerInfoBody;

  @Metadata({ data: "json, name=containerImage" })
  containerImage?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=exportedBlobUrl" })
  exportedBlobUrl?: string;

  @Metadata({ data: "json, name=features" })
  features?: Map<string, string>;

  @Metadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=gitStatus" })
  gitStatus?: GitStatus;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastStateUpdateReason" })
  lastStateUpdateReason?: string;

  @Metadata({ data: "json, name=lastUsed" })
  lastUsed?: Date;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=ownerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=planId" })
  planId?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: string;

  @Metadata({ data: "json, name=portForwardingConnection" })
  portForwardingConnection?: ConnectionInfoBody;

  @Metadata({ data: "json, name=recentFolders" })
  recentFolders?: string[];

  @Metadata({ data: "json, name=seed" })
  seed?: SeedInfoBody;

  @Metadata({ data: "json, name=skuDisplayName" })
  skuDisplayName?: string;

  @Metadata({ data: "json, name=skuName" })
  skuName?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=subscriptionData" })
  subscriptionData?: SubscriptionData;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
