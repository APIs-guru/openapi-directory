import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=remaining_api_calls" })
  remainingApiCalls?: number;

  @Metadata({ data: "json, name=remaining_concurrency" })
  remainingConcurrency?: number;

  @Metadata({ data: "json, name=resets_at" })
  resetsAt?: number;
}
