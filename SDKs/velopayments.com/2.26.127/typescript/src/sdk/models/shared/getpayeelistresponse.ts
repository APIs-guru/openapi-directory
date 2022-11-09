import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GetPayeeListResponseCompany } from "./getpayeelistresponsecompany";
import { GetPayeeListResponseIndividual } from "./getpayeelistresponseindividual";
import { OnboardedStatus2Enum } from "./onboardedstatus2enum";
import { PayeeTypeEnum } from "./payeetypeenum";
import { PayeePayorRefV3 } from "./payeepayorrefv3";
import { WatchlistStatusEnum } from "./watchliststatusenum";


export class GetPayeeListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=company" })
  company?: GetPayeeListResponseCompany;

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
  individual?: GetPayeeListResponseIndividual;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=onboardedStatus" })
  onboardedStatus?: OnboardedStatus2Enum;

  @Metadata({ data: "json, name=payeeId" })
  payeeId?: string;

  @Metadata({ data: "json, name=payeeType" })
  payeeType?: PayeeTypeEnum;

  @Metadata({ data: "json, name=payorRefs", elemType: shared.PayeePayorRefV3 })
  payorRefs?: PayeePayorRefV3[];

  @Metadata({ data: "json, name=watchlistOverrideComment" })
  watchlistOverrideComment?: string;

  @Metadata({ data: "json, name=watchlistStatus" })
  watchlistStatus?: WatchlistStatusEnum;

  @Metadata({ data: "json, name=watchlistStatusUpdatedTimestamp" })
  watchlistStatusUpdatedTimestamp?: string;
}
