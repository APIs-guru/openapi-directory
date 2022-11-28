import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancellationReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancellationReasonCode" })
  cancellationReasonCode?: string;

  @SpeakeasyMetadata({ data: "json, name=cancellationReasonText" })
  cancellationReasonText?: string;
}
