import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlertDeliveryStatusInfo } from "./alertdeliverystatusinfo";
import { AlertAnnotationInfo } from "./alertannotationinfo";
import { AlertHistoryInfoDetailed } from "./alerthistoryinfodetailed";


export class OverviewAlert extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertDeliveryStatus" })
  alertDeliveryStatus?: AlertDeliveryStatusInfo;

  @Metadata({ data: "json, name=annotations", elemType: shared.AlertAnnotationInfo })
  annotations?: AlertAnnotationInfo[];

  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=flags" })
  flags?: number;

  @Metadata({ data: "json, name=historyDetailed" })
  historyDetailed?: AlertHistoryInfoDetailed;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=requiredAcknowledgements" })
  requiredAcknowledgements?: number;

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
