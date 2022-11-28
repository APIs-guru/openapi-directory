import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AlertSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterAction" })
  filterAction?: number;

  @SpeakeasyMetadata({ data: "json, name=filterMode" })
  filterMode?: number;

  @SpeakeasyMetadata({ data: "json, name=optOutMode" })
  optOutMode?: number;

  @SpeakeasyMetadata({ data: "json, name=persistentNotificicationMode" })
  persistentNotificicationMode?: number;

  @SpeakeasyMetadata({ data: "json, name=responseMode" })
  responseMode?: number;

  @SpeakeasyMetadata({ data: "json, name=responseTime" })
  responseTime?: number;
}
