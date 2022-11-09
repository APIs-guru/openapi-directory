import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Notifications extends SpeakeasyBase {
  @Metadata({ data: "json, name=minimumBalance" })
  minimumBalance?: number;
}
