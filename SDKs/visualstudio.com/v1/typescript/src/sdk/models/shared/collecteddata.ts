import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectedData extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentActivityId" })
  parentActivityId?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
