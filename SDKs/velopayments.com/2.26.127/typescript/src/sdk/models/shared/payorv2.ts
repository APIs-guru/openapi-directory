import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PayorAddressV2 } from "./payoraddressv2";
import { KycStateEnum } from "./kycstateenum";
import { PaymentRailsEnum } from "./paymentrailsenum";
import { TransmissionTypes2 } from "./transmissiontypes2";

export enum PayorV2LanguageEnum {
    En = "EN"
,    Fr = "FR"
}


export class PayorV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PayorAddressV2;

  @Metadata({ data: "json, name=allowsLanguageChoice" })
  allowsLanguageChoice?: boolean;

  @Metadata({ data: "json, name=collectiveAlias" })
  collectiveAlias?: string;

  @Metadata({ data: "json, name=dbaName" })
  dbaName?: string;

  @Metadata({ data: "json, name=includesReports" })
  includesReports?: boolean;

  @Metadata({ data: "json, name=kycState" })
  kycState?: KycStateEnum;

  @Metadata({ data: "json, name=language" })
  language?: PayorV2LanguageEnum;

  @Metadata({ data: "json, name=manualLockout" })
  manualLockout?: boolean;

  @Metadata({ data: "json, name=maxMasterPayorAdmins" })
  maxMasterPayorAdmins?: number;

  @Metadata({ data: "json, name=payeeGracePeriodDays" })
  payeeGracePeriodDays?: number;

  @Metadata({ data: "json, name=payeeGracePeriodProcessingEnabled" })
  payeeGracePeriodProcessingEnabled?: boolean;

  @Metadata({ data: "json, name=paymentRails" })
  paymentRails?: PaymentRailsEnum;

  @Metadata({ data: "json, name=payorId" })
  payorId: string;

  @Metadata({ data: "json, name=payorName" })
  payorName: string;

  @Metadata({ data: "json, name=payorXid" })
  payorXid?: string;

  @Metadata({ data: "json, name=primaryContactEmail" })
  primaryContactEmail?: string;

  @Metadata({ data: "json, name=primaryContactName" })
  primaryContactName?: string;

  @Metadata({ data: "json, name=primaryContactPhone" })
  primaryContactPhone?: string;

  @Metadata({ data: "json, name=reminderEmailsOptOut" })
  reminderEmailsOptOut?: boolean;

  @Metadata({ data: "json, name=remoteSystemIds" })
  remoteSystemIds?: string[];

  @Metadata({ data: "json, name=supportContact" })
  supportContact?: string;

  @Metadata({ data: "json, name=transmissionTypes" })
  transmissionTypes?: TransmissionTypes2;

  @Metadata({ data: "json, name=wuCustomerId" })
  wuCustomerId?: string;
}
