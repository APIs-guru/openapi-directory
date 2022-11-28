import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MetaTagModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
