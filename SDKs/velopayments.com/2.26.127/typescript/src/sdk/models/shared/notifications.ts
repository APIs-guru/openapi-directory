import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Notifications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minimumBalance" })
  minimumBalance?: number;
}
