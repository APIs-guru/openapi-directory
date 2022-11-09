import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlertCounts } from "./alertcounts";
import { AlertCounts } from "./alertcounts";
import { AlertCounts } from "./alertcounts";
import { AlertCounts } from "./alertcounts";


export class AlertReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=last24Hours" })
  last24Hours?: AlertCounts;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=teamCurrentDuty" })
  teamCurrentDuty?: AlertCounts;

  @Metadata({ data: "json, name=teamId" })
  teamId?: string;

  @Metadata({ data: "json, name=teamLastDuty" })
  teamLastDuty?: AlertCounts;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=userLastDutyChange" })
  userLastDutyChange?: AlertCounts;
}
