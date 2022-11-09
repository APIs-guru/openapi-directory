import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionInfoBody } from "./connectioninfobody";
import { ExperimentalFeaturesBody } from "./experimentalfeaturesbody";
import { IdentityBody } from "./identitybody";
import { PersonalizationInfoBody } from "./personalizationinfobody";
import { SecretDataBody } from "./secretdatabody";
import { SeedInfoBody } from "./seedinfobody";


export class CreateCloudEnvironmentBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoShutdownDelayMinutes" })
  autoShutdownDelayMinutes?: number;

  @Metadata({ data: "json, name=connection" })
  connection?: ConnectionInfoBody;

  @Metadata({ data: "json, name=containerImage" })
  containerImage?: string;

  @Metadata({ data: "json, name=createAsPrebuild" })
  createAsPrebuild?: boolean;

  @Metadata({ data: "json, name=devContainerJson" })
  devContainerJson?: string;

  @Metadata({ data: "json, name=experimentalFeatures" })
  experimentalFeatures?: ExperimentalFeaturesBody;

  @Metadata({ data: "json, name=features" })
  features?: Map<string, string>;

  @Metadata({ data: "json, name=friendlyName" })
  friendlyName: string;

  @Metadata({ data: "json, name=githubEnvironmentEndpoint" })
  githubEnvironmentEndpoint?: string;

  @Metadata({ data: "json, name=hasDevcontainerJson" })
  hasDevcontainerJson?: boolean;

  @Metadata({ data: "json, name=identity" })
  identity?: IdentityBody;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=personalization" })
  personalization?: PersonalizationInfoBody;

  @Metadata({ data: "json, name=planId" })
  planId?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: string;

  @Metadata({ data: "json, name=secrets", elemType: shared.SecretDataBody })
  secrets?: SecretDataBody[];

  @Metadata({ data: "json, name=seed" })
  seed?: SeedInfoBody;

  @Metadata({ data: "json, name=skuName" })
  skuName?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
