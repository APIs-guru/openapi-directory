import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OverviewEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgedAlerts" })
  acknowledgedAlerts?: string[];

  @SpeakeasyMetadata({ data: "json, name=alertId" })
  alertId?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=closedAlerts" })
  closedAlerts?: string[];

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=eventSourceType" })
  eventSourceType?: number;

  @SpeakeasyMetadata({ data: "json, name=eventStatus" })
  eventStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: number;

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
