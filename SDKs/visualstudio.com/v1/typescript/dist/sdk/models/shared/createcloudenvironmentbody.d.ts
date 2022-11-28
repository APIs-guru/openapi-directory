import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionInfoBody } from "./connectioninfobody";
import { ExperimentalFeaturesBody } from "./experimentalfeaturesbody";
import { IdentityBody } from "./identitybody";
import { PersonalizationInfoBody } from "./personalizationinfobody";
import { SecretDataBody } from "./secretdatabody";
import { SeedInfoBody } from "./seedinfobody";
export declare class CreateCloudEnvironmentBody extends SpeakeasyBase {
    autoShutdownDelayMinutes?: number;
    connection?: ConnectionInfoBody;
    containerImage?: string;
    createAsPrebuild?: boolean;
    devContainerJson?: string;
    experimentalFeatures?: ExperimentalFeaturesBody;
    features?: Map<string, string>;
    friendlyName: string;
    githubEnvironmentEndpoint?: string;
    hasDevcontainerJson?: boolean;
    identity?: IdentityBody;
    label?: string;
    location?: string;
    personalization?: PersonalizationInfoBody;
    planId?: string;
    platform?: string;
    secrets?: SecretDataBody[];
    seed?: SeedInfoBody;
    skuName?: string;
    type: string;
}
