import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GitStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ahead" })
  ahead?: number;

  @SpeakeasyMetadata({ data: "json, name=behind" })
  behind?: number;

  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit?: string;

  @SpeakeasyMetadata({ data: "json, name=hasUncommittedChanges" })
  hasUncommittedChanges?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasUnpushedChanges" })
  hasUnpushedChanges?: boolean;
}
