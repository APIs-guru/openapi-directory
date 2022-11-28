import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionInfoBody } from "./connectioninfobody";
import { ExperimentalFeaturesBody } from "./experimentalfeaturesbody";
import { IdentityBody } from "./identitybody";
import { PersonalizationInfoBody } from "./personalizationinfobody";
import { SecretDataBody } from "./secretdatabody";
import { SeedInfoBody } from "./seedinfobody";



export class CreateCloudEnvironmentBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoShutdownDelayMinutes" })
  autoShutdownDelayMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=connection" })
  connection?: ConnectionInfoBody;

  @SpeakeasyMetadata({ data: "json, name=containerImage" })
  containerImage?: string;

  @SpeakeasyMetadata({ data: "json, name=createAsPrebuild" })
  createAsPrebuild?: boolean;

  @SpeakeasyMetadata({ data: "json, name=devContainerJson" })
  devContainerJson?: string;

  @SpeakeasyMetadata({ data: "json, name=experimentalFeatures" })
  experimentalFeatures?: ExperimentalFeaturesBody;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "json, name=githubEnvironmentEndpoint" })
  githubEnvironmentEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=hasDevcontainerJson" })
  hasDevcontainerJson?: boolean;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: IdentityBody;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=personalization" })
  personalization?: PersonalizationInfoBody;

  @SpeakeasyMetadata({ data: "json, name=planId" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "json, name=secrets", elemType: SecretDataBody })
  secrets?: SecretDataBody[];

  @SpeakeasyMetadata({ data: "json, name=seed" })
  seed?: SeedInfoBody;

  @SpeakeasyMetadata({ data: "json, name=skuName" })
  skuName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
