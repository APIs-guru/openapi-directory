import { SpeakeasyBase } from "../../../internal/utils";
import { GetPayeeListResponseCompany2 } from "./getpayeelistresponsecompany2";
import { GetPayeeListResponseIndividual2 } from "./getpayeelistresponseindividual2";
import { OnboardedStatusEnum } from "./onboardedstatusenum";
import { PayeeTypeEnum } from "./payeetypeenum";
import { PayeePayorRef } from "./payeepayorref";
import { WatchlistStatus2Enum } from "./watchliststatus2enum";
export declare class GetPayeeListResponse2 extends SpeakeasyBase {
    company?: GetPayeeListResponseCompany2;
    country?: string;
    created?: Date;
    disabled?: boolean;
    disabledComment?: string;
    disabledUpdatedTimestamp?: Date;
    displayName?: string;
    email?: string;
    individual?: GetPayeeListResponseIndividual2;
    language?: string;
    onboardedStatus?: OnboardedStatusEnum;
    payeeId?: string;
    payeeType?: PayeeTypeEnum;
    payorRefs?: PayeePayorRef[];
    watchlistOverrideComment?: string;
    watchlistStatus?: WatchlistStatus2Enum;
    watchlistStatusUpdatedTimestamp?: string;
}
