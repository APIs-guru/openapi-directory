import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AlertCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acked" })
  acked?: number;

  @SpeakeasyMetadata({ data: "json, name=closed" })
  closed?: number;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;

  @SpeakeasyMetadata({ data: "json, name=unhandled" })
  unhandled?: number;
}
