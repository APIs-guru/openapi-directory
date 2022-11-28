import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEnvironmentStateChangeBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newValue" })
  newValue?: number;

  @SpeakeasyMetadata({ data: "json, name=oldValue" })
  oldValue?: number;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;
}
