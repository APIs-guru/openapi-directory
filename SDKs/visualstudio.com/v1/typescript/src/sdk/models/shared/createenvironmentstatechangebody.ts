import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEnvironmentStateChangeBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=newValue" })
  newValue?: number;

  @Metadata({ data: "json, name=oldValue" })
  oldValue?: number;

  @Metadata({ data: "json, name=time" })
  time?: Date;
}
