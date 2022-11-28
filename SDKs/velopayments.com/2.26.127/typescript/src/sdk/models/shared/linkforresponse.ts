import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LinkForResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;
}
