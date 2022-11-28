import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;
}
