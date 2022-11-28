import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RelatedResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
