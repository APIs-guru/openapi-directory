import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancellationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=reasonCode" })
  reasonCode?: string;
}
