import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancellationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reasonCode" })
  reasonCode?: string;
}
