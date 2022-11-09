import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlertAnnotationInfo } from "./alertannotationinfo";
import { AlertAttachment } from "./alertattachment";
import { AlertHistoryInfoDetailed } from "./alerthistoryinfodetailed";
import { EventParameterInfo } from "./eventparameterinfo";


export class AlertInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations", elemType: shared.AlertAnnotationInfo })
  annotations?: AlertAnnotationInfo[];

  @Metadata({ data: "json, name=attachments", elemType: shared.AlertAttachment })
  attachments?: AlertAttachment[];

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=eventSourceId" })
  eventSourceId?: string;

  @Metadata({ data: "json, name=eventSourceType" })
  eventSourceType?: number;

  @Metadata({ data: "json, name=flags" })
  flags?: number;

  @Metadata({ data: "json, name=history" })
  history?: AlertHistoryInfoDetailed;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=parameters", elemType: shared.EventParameterInfo })
  parameters?: EventParameterInfo[];

  @Metadata({ data: "json, name=severity" })
  severity?: number;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=teamId" })
  teamId?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
