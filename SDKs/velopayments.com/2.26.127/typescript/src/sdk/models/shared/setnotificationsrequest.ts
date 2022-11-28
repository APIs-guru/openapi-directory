import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetNotificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minimumBalance" })
  minimumBalance: number;
}
