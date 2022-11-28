import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlertDeliveryStatusInfo } from "./alertdeliverystatusinfo";
import { AlertAnnotationInfo } from "./alertannotationinfo";
import { AlertHistoryInfoDetailed } from "./alerthistoryinfodetailed";



export class OverviewAlert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertDeliveryStatus" })
  alertDeliveryStatus?: AlertDeliveryStatusInfo;

  @SpeakeasyMetadata({ data: "json, name=annotations", elemType: AlertAnnotationInfo })
  annotations?: AlertAnnotationInfo[];

  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=flags" })
  flags?: number;

  @SpeakeasyMetadata({ data: "json, name=historyDetailed" })
  historyDetailed?: AlertHistoryInfoDetailed;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=requiredAcknowledgements" })
  requiredAcknowledgements?: number;

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
