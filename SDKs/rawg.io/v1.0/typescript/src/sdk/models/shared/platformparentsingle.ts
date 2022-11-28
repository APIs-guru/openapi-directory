import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Platform } from "./platform";



export class PlatformParentSingle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=platforms", elemType: Platform })
  platforms: Platform[];

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;
}
