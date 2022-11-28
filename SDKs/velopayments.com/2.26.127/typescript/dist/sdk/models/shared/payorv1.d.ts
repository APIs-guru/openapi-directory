import { SpeakeasyBase } from "../../../internal/utils";
import { PayorAddress } from "./payoraddress";
import { KycStateEnum } from "./kycstateenum";
import { TransmissionTypes } from "./transmissiontypes";
export declare enum PayorV1LanguageEnum {
    En = "EN",
    Fr = "FR"
}
export declare class PayorV1 extends SpeakeasyBase {
    address?: PayorAddress;
    allowsLanguageChoice?: boolean;
    collectiveAlias?: string;
    dbaName?: string;
    fundingAccountAccountName?: string;
    fundingAccountAccountNumber?: string;
    fundingAccountRoutingNumber?: string;
    includesReports?: boolean;
    kycState?: KycStateEnum;
    language?: PayorV1LanguageEnum;
    manualLockout?: boolean;
    maxMasterPayorAdmins?: number;
    payeeGracePeriodDays?: number;
    payeeGracePeriodProcessingEnabled?: boolean;
    payorId?: string;
    payorName: string;
    primaryContactEmail?: string;
    primaryContactName?: string;
    primaryContactPhone?: string;
    reminderEmailsOptOut?: boolean;
    supportContact?: string;
    transmissionTypes?: TransmissionTypes;
}
