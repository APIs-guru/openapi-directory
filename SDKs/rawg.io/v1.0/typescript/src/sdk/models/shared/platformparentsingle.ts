import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Platform } from "./platform";


export class PlatformParentSingle extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=platforms", elemType: shared.Platform })
  platforms: Platform[];

  @Metadata({ data: "json, name=slug" })
  slug?: string;
}
