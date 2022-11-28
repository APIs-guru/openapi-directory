import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SiteOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=excludes" })
  excludes?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;
}
