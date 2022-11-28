import { SpeakeasyBase } from "../../../internal/utils";
import { PrebuildEnvironmentOptions } from "./prebuildenvironmentoptions";
import { SecretDataBody } from "./secretdatabody";
export declare class CreateEnvironmentPoolResourceBody extends SpeakeasyBase {
    environmentOptions?: PrebuildEnvironmentOptions;
    secrets?: SecretDataBody[];
}
