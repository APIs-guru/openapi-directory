import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScheduleInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=options" })
  options?: number;

  @Metadata({ data: "json, name=start" })
  start?: Date;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
