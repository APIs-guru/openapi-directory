import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrebuildEnvironmentOptions } from "./prebuildenvironmentoptions";
import { SecretDataBody } from "./secretdatabody";



export class CreateEnvironmentPoolResourceBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentOptions" })
  environmentOptions?: PrebuildEnvironmentOptions;

  @SpeakeasyMetadata({ data: "json, name=secrets", elemType: SecretDataBody })
  secrets?: SecretDataBody[];
}
