import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancellationReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancellationReasonCode" })
  cancellationReasonCode?: string;

  @Metadata({ data: "json, name=cancellationReasonText" })
  cancellationReasonText?: string;
}
