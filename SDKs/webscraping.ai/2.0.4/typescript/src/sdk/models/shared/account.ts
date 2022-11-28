import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=remaining_api_calls" })
  remainingApiCalls?: number;

  @SpeakeasyMetadata({ data: "json, name=remaining_concurrency" })
  remainingConcurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=resets_at" })
  resetsAt?: number;
}
