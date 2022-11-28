import { SpeakeasyBase } from "../../../internal/utils";
import { FundingEvent } from "./fundingevent";
export declare enum FundingAuditFundingTypeEnum {
    Ach = "ACH",
    Wire = "WIRE",
    Embedded = "EMBEDDED"
}
export declare enum FundingAuditStatusEnum {
    Pending = "PENDING",
    Failed = "FAILED",
    Credit = "CREDIT",
    Debit = "DEBIT"
}
export declare enum FundingAuditTopupTypeEnum {
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
}
export declare class FundingAudit extends SpeakeasyBase {
    amount?: number;
    currency?: string;
    dateTime?: Date;
    events?: FundingEvent[];
    fundingAccountName?: string;
    fundingType?: FundingAuditFundingTypeEnum;
    sourceAccountName?: string;
    status?: FundingAuditStatusEnum;
    topupType?: FundingAuditTopupTypeEnum;
}
