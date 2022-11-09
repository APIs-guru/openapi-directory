import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SiteOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=excludes" })
  excludes?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=scope" })
  scope?: string;
}
