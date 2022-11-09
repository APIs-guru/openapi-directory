import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FundingEvent } from "./fundingevent";

export enum FundingAuditFundingTypeEnum {
    Ach = "ACH"
,    Wire = "WIRE"
,    Embedded = "EMBEDDED"
}

export enum FundingAuditStatusEnum {
    Pending = "PENDING"
,    Failed = "FAILED"
,    Credit = "CREDIT"
,    Debit = "DEBIT"
}

export enum FundingAuditTopupTypeEnum {
    Automatic = "AUTOMATIC"
,    Manual = "MANUAL"
}


export class FundingAudit extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @Metadata({ data: "json, name=events", elemType: shared.FundingEvent })
  events?: FundingEvent[];

  @Metadata({ data: "json, name=fundingAccountName" })
  fundingAccountName?: string;

  @Metadata({ data: "json, name=fundingType" })
  fundingType?: FundingAuditFundingTypeEnum;

  @Metadata({ data: "json, name=sourceAccountName" })
  sourceAccountName?: string;

  @Metadata({ data: "json, name=status" })
  status?: FundingAuditStatusEnum;

  @Metadata({ data: "json, name=topupType" })
  topupType?: FundingAuditTopupTypeEnum;
}
