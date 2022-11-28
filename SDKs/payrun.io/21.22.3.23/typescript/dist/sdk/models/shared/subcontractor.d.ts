import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The sub contractors' address
**/
export declare class SubContractorSubContractorAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    country?: string;
    postcode?: string;
}
/**
 * The sub contractors' bank account
**/
export declare class SubContractorSubContractorBankAccount extends SpeakeasyBase {
    accountName?: string;
    accountNumber?: string;
    reference?: string;
    sortCode?: string;
}
export declare enum SubContractorSubContractorBusinessTypeEnum {
    SoleTrader = "SoleTrader",
    Company = "Company",
    Partnership = "Partnership",
    Trust = "Trust"
}
export declare enum SubContractorSubContractorPayFrequencyEnum {
    Monthly = "Monthly",
    Weekly = "Weekly"
}
export declare enum SubContractorSubContractorPaymentMethodEnum {
    NotSet = "NotSet",
    Cash = "Cash",
    Cheque = "Cheque",
    Bacs = "BACS",
    FasterPayments = "FasterPayments",
    Other = "Other"
}
export declare enum SubContractorSubContractorRegionEnum {
    NotSet = "NotSet",
    England = "England",
    Scotland = "Scotland",
    Wales = "Wales"
}
export declare enum SubContractorSubContractorTaxationStatusEnum {
    Unmatched = "Unmatched",
    Net = "Net",
    Gross = "Gross"
}
export declare enum SubContractorSubContractorTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}
export declare class SubContractorSubContractor extends SpeakeasyBase {
    address?: SubContractorSubContractorAddress;
    bankAccount?: SubContractorSubContractorBankAccount;
    businessType?: SubContractorSubContractorBusinessTypeEnum;
    companyName?: string;
    companyRegistrationNumber?: string;
    deactivated?: boolean;
    effectiveDate?: Date;
    firstName?: string;
    initials?: string;
    lastName?: string;
    metaData?: Map<string, any>;
    middleName?: string;
    niNumber?: string;
    partnershipName?: string;
    partnershipUniqueTaxReference?: string;
    payFrequency?: SubContractorSubContractorPayFrequencyEnum;
    paymentMethod?: SubContractorSubContractorPaymentMethodEnum;
    region?: SubContractorSubContractorRegionEnum;
    revision?: number;
    taxationStatus?: SubContractorSubContractorTaxationStatusEnum;
    telephone?: string;
    territory?: SubContractorSubContractorTerritoryEnum;
    title?: string;
    tradingName?: string;
    uniqueTaxReference?: string;
    vatRegistered?: boolean;
    vatRegistrationNumber?: string;
    verificationDate?: Date;
    verificationNumber?: string;
    worksNumber?: string;
}
export declare class SubContractor extends SpeakeasyBase {
    subContractor?: SubContractorSubContractor;
}
