import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CategoryAugmentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
