import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OldUsernameContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=oldName" })
  oldName?: string;
}
