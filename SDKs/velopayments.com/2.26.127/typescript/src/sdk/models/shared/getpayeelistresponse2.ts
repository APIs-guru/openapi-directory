import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GetPayeeListResponseCompany2 } from "./getpayeelistresponsecompany2";
import { GetPayeeListResponseIndividual2 } from "./getpayeelistresponseindividual2";
import { OnboardedStatusEnum } from "./onboardedstatusenum";
import { PayeeTypeEnum } from "./payeetypeenum";
import { PayeePayorRef } from "./payeepayorref";
import { WatchlistStatus2Enum } from "./watchliststatus2enum";


export class GetPayeeListResponse2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=company" })
  company?: GetPayeeListResponseCompany2;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=disabledComment" })
  disabledComment?: string;

  @Metadata({ data: "json, name=disabledUpdatedTimestamp" })
  disabledUpdatedTimestamp?: Date;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=individual" })
  individual?: GetPayeeListResponseIndividual2;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=onboardedStatus" })
  onboardedStatus?: OnboardedStatusEnum;

  @Metadata({ data: "json, name=payeeId" })
  payeeId?: string;

  @Metadata({ data: "json, name=payeeType" })
  payeeType?: PayeeTypeEnum;

  @Metadata({ data: "json, name=payorRefs", elemType: shared.PayeePayorRef })
  payorRefs?: PayeePayorRef[];

  @Metadata({ data: "json, name=watchlistOverrideComment" })
  watchlistOverrideComment?: string;

  @Metadata({ data: "json, name=watchlistStatus" })
  watchlistStatus?: WatchlistStatus2Enum;

  @Metadata({ data: "json, name=watchlistStatusUpdatedTimestamp" })
  watchlistStatusUpdatedTimestamp?: string;
}
