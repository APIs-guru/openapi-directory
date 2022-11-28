import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OldUsernameContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=oldName" })
  oldName?: string;
}
