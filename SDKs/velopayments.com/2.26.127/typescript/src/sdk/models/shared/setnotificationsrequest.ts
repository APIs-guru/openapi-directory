import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetNotificationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=minimumBalance" })
  minimumBalance: number;
}
