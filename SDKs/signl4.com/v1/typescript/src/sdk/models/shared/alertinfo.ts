import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlertAnnotationInfo } from "./alertannotationinfo";
import { AlertAttachment } from "./alertattachment";
import { AlertHistoryInfoDetailed } from "./alerthistoryinfodetailed";
import { EventParameterInfo } from "./eventparameterinfo";



export class AlertInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations", elemType: AlertAnnotationInfo })
  annotations?: AlertAnnotationInfo[];

  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: AlertAttachment })
  attachments?: AlertAttachment[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=eventSourceId" })
  eventSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=eventSourceType" })
  eventSourceType?: number;

  @SpeakeasyMetadata({ data: "json, name=flags" })
  flags?: number;

  @SpeakeasyMetadata({ data: "json, name=history" })
  history?: AlertHistoryInfoDetailed;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: EventParameterInfo })
  parameters?: EventParameterInfo[];

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
