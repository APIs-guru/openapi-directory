import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CategoryAugmentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
