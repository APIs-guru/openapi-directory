import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CancellationReason } from "./cancellationreason";



export class CancellationReasonsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: CancellationReason })
  reasons?: CancellationReason[];
}
