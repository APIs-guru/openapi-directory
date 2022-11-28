import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectedData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentActivityId" })
  parentActivityId?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
