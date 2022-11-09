import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GitStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=ahead" })
  ahead?: number;

  @Metadata({ data: "json, name=behind" })
  behind?: number;

  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=commit" })
  commit?: string;

  @Metadata({ data: "json, name=hasUncommittedChanges" })
  hasUncommittedChanges?: boolean;

  @Metadata({ data: "json, name=hasUnpushedChanges" })
  hasUnpushedChanges?: boolean;
}
