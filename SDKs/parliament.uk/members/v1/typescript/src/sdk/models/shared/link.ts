import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Link extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=rel" })
  rel?: string;
}
