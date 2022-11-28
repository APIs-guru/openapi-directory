import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Notifications2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minimumBalance" })
  minimumBalance?: number;
}
