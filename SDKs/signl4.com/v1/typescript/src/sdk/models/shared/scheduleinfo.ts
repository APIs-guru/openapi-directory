import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScheduleInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
