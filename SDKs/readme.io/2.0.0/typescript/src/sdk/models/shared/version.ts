import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codename" })
  codename?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=is_beta" })
  isBeta?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_deprecated" })
  isDeprecated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_hidden" })
  isHidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_stable" })
  isStable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
