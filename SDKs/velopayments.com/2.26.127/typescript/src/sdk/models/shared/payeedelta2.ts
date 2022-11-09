import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OnboardedStatus2Enum } from "./onboardedstatus2enum";


export class PayeeDelta2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=dbaName" })
  dbaName?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=onboardedStatus" })
  onboardedStatus?: OnboardedStatus2Enum;

  @Metadata({ data: "json, name=payeeCountry" })
  payeeCountry?: string;

  @Metadata({ data: "json, name=payeeId" })
  payeeId: string;

  @Metadata({ data: "json, name=remoteId" })
  remoteId: string;
}
