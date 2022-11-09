import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Notifications2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=minimumBalance" })
  minimumBalance?: number;
}
