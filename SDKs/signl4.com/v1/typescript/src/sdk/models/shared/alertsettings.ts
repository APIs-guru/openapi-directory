import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AlertSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterAction" })
  filterAction?: number;

  @Metadata({ data: "json, name=filterMode" })
  filterMode?: number;

  @Metadata({ data: "json, name=optOutMode" })
  optOutMode?: number;

  @Metadata({ data: "json, name=persistentNotificicationMode" })
  persistentNotificicationMode?: number;

  @Metadata({ data: "json, name=responseMode" })
  responseMode?: number;

  @Metadata({ data: "json, name=responseTime" })
  responseTime?: number;
}
