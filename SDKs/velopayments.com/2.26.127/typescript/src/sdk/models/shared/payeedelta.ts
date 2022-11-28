import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnboardedStatus2Enum } from "./onboardedstatus2enum";



export class PayeeDelta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dbaName" })
  dbaName?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=onboardedStatus" })
  onboardedStatus?: OnboardedStatus2Enum;

  @SpeakeasyMetadata({ data: "json, name=payeeCountry" })
  payeeCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeId" })
  payeeId: string;

  @SpeakeasyMetadata({ data: "json, name=remoteId" })
  remoteId: string;
}
