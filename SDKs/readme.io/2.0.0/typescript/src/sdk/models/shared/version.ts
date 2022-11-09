import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Version extends SpeakeasyBase {
  @Metadata({ data: "json, name=codename" })
  codename?: string;

  @Metadata({ data: "json, name=from" })
  from: string;

  @Metadata({ data: "json, name=is_beta" })
  isBeta?: boolean;

  @Metadata({ data: "json, name=is_deprecated" })
  isDeprecated?: boolean;

  @Metadata({ data: "json, name=is_hidden" })
  isHidden?: boolean;

  @Metadata({ data: "json, name=is_stable" })
  isStable?: boolean;

  @Metadata({ data: "json, name=version" })
  version: string;
}
