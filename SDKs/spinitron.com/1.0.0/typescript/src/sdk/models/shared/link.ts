import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}
