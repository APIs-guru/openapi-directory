import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FundingEvent } from "./fundingevent";


export enum FundingAuditFundingTypeEnum {
    Ach = "ACH",
    Wire = "WIRE",
    Embedded = "EMBEDDED"
}

export enum FundingAuditStatusEnum {
    Pending = "PENDING",
    Failed = "FAILED",
    Credit = "CREDIT",
    Debit = "DEBIT"
}

export enum FundingAuditTopupTypeEnum {
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
}


export class FundingAudit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: FundingEvent })
  events?: FundingEvent[];

  @SpeakeasyMetadata({ data: "json, name=fundingAccountName" })
  fundingAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingType" })
  fundingType?: FundingAuditFundingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceAccountName" })
  sourceAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: FundingAuditStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=topupType" })
  topupType?: FundingAuditTopupTypeEnum;
}
