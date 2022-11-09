import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CancellationReason } from "./cancellationreason";


export class CancellationReasonsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=reasons", elemType: shared.CancellationReason })
  reasons?: CancellationReason[];
}
