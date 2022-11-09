import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PayorAddress } from "./payoraddress";
import { KycStateEnum } from "./kycstateenum";
import { TransmissionTypes } from "./transmissiontypes";

export enum PayorV1LanguageEnum {
    En = "EN"
,    Fr = "FR"
}


export class PayorV1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PayorAddress;

  @Metadata({ data: "json, name=allowsLanguageChoice" })
  allowsLanguageChoice?: boolean;

  @Metadata({ data: "json, name=collectiveAlias" })
  collectiveAlias?: string;

  @Metadata({ data: "json, name=dbaName" })
  dbaName?: string;

  @Metadata({ data: "json, name=fundingAccountAccountName" })
  fundingAccountAccountName?: string;

  @Metadata({ data: "json, name=fundingAccountAccountNumber" })
  fundingAccountAccountNumber?: string;

  @Metadata({ data: "json, name=fundingAccountRoutingNumber" })
  fundingAccountRoutingNumber?: string;

  @Metadata({ data: "json, name=includesReports" })
  includesReports?: boolean;

  @Metadata({ data: "json, name=kycState" })
  kycState?: KycStateEnum;

  @Metadata({ data: "json, name=language" })
  language?: PayorV1LanguageEnum;

  @Metadata({ data: "json, name=manualLockout" })
  manualLockout?: boolean;

  @Metadata({ data: "json, name=maxMasterPayorAdmins" })
  maxMasterPayorAdmins?: number;

  @Metadata({ data: "json, name=payeeGracePeriodDays" })
  payeeGracePeriodDays?: number;

  @Metadata({ data: "json, name=payeeGracePeriodProcessingEnabled" })
  payeeGracePeriodProcessingEnabled?: boolean;

  @Metadata({ data: "json, name=payorId" })
  payorId?: string;

  @Metadata({ data: "json, name=payorName" })
  payorName: string;

  @Metadata({ data: "json, name=primaryContactEmail" })
  primaryContactEmail?: string;

  @Metadata({ data: "json, name=primaryContactName" })
  primaryContactName?: string;

  @Metadata({ data: "json, name=primaryContactPhone" })
  primaryContactPhone?: string;

  @Metadata({ data: "json, name=reminderEmailsOptOut" })
  reminderEmailsOptOut?: boolean;

  @Metadata({ data: "json, name=supportContact" })
  supportContact?: string;

  @Metadata({ data: "json, name=transmissionTypes" })
  transmissionTypes?: TransmissionTypes;
}
