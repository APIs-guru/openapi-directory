import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlertCounts } from "./alertcounts";



export class AlertReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last24Hours" })
  last24Hours?: AlertCounts;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=teamCurrentDuty" })
  teamCurrentDuty?: AlertCounts;

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId?: string;

  @SpeakeasyMetadata({ data: "json, name=teamLastDuty" })
  teamLastDuty?: AlertCounts;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=userLastDutyChange" })
  userLastDutyChange?: AlertCounts;
}
