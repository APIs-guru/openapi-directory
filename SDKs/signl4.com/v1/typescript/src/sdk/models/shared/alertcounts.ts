import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AlertCounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=acked" })
  acked?: number;

  @Metadata({ data: "json, name=closed" })
  closed?: number;

  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=start" })
  start?: Date;

  @Metadata({ data: "json, name=unhandled" })
  unhandled?: number;
}
