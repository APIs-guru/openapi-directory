import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OverviewEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgedAlerts" })
  acknowledgedAlerts?: string[];

  @Metadata({ data: "json, name=alertId" })
  alertId?: string;

  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=closedAlerts" })
  closedAlerts?: string[];

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=eventSourceType" })
  eventSourceType?: number;

  @Metadata({ data: "json, name=eventStatus" })
  eventStatus?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=severity" })
  severity?: number;

  @Metadata({ data: "json, name=teamId" })
  teamId?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
