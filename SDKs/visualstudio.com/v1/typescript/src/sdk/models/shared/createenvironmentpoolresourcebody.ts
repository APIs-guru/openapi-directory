import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrebuildEnvironmentOptions } from "./prebuildenvironmentoptions";
import { SecretDataBody } from "./secretdatabody";


export class CreateEnvironmentPoolResourceBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentOptions" })
  environmentOptions?: PrebuildEnvironmentOptions;

  @Metadata({ data: "json, name=secrets", elemType: shared.SecretDataBody })
  secrets?: SecretDataBody[];
}
