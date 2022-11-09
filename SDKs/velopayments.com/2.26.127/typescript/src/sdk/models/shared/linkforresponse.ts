import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LinkForResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=rel" })
  rel?: string;
}
