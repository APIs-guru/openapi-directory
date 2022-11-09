import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubContractorSubContractorAddress
/** 
 * The sub contractors' address
**/
export class SubContractorSubContractorAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address1" })
  address1?: string;

  @Metadata({ data: "json, name=Address2" })
  address2?: string;

  @Metadata({ data: "json, name=Address3" })
  address3?: string;

  @Metadata({ data: "json, name=Address4" })
  address4?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=Postcode" })
  postcode?: string;
}


// SubContractorSubContractorBankAccount
/** 
 * The sub contractors' bank account
**/
export class SubContractorSubContractorBankAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountName" })
  accountName?: string;

  @Metadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=SortCode" })
  sortCode?: string;
}

export enum SubContractorSubContractorBusinessTypeEnum {
    SoleTrader = "SoleTrader"
,    Company = "Company"
,    Partnership = "Partnership"
,    Trust = "Trust"
}

export enum SubContractorSubContractorPayFrequencyEnum {
    Monthly = "Monthly"
,    Weekly = "Weekly"
}

export enum SubContractorSubContractorPaymentMethodEnum {
    NotSet = "NotSet"
,    Cash = "Cash"
,    Cheque = "Cheque"
,    Bacs = "BACS"
,    FasterPayments = "FasterPayments"
,    Other = "Other"
}

export enum SubContractorSubContractorRegionEnum {
    NotSet = "NotSet"
,    England = "England"
,    Scotland = "Scotland"
,    Wales = "Wales"
}

export enum SubContractorSubContractorTaxationStatusEnum {
    Unmatched = "Unmatched"
,    Net = "Net"
,    Gross = "Gross"
}

export enum SubContractorSubContractorTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}


export class SubContractorSubContractor extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address?: SubContractorSubContractorAddress;

  @Metadata({ data: "json, name=BankAccount" })
  bankAccount?: SubContractorSubContractorBankAccount;

  @Metadata({ data: "json, name=BusinessType" })
  businessType?: SubContractorSubContractorBusinessTypeEnum;

  @Metadata({ data: "json, name=CompanyName" })
  companyName?: string;

  @Metadata({ data: "json, name=CompanyRegistrationNumber" })
  companyRegistrationNumber?: string;

  @Metadata({ data: "json, name=Deactivated" })
  deactivated?: boolean;

  @Metadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @Metadata({ data: "json, name=FirstName" })
  firstName?: string;

  @Metadata({ data: "json, name=Initials" })
  initials?: string;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @Metadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @Metadata({ data: "json, name=NiNumber" })
  niNumber?: string;

  @Metadata({ data: "json, name=PartnershipName" })
  partnershipName?: string;

  @Metadata({ data: "json, name=PartnershipUniqueTaxReference" })
  partnershipUniqueTaxReference?: string;

  @Metadata({ data: "json, name=PayFrequency" })
  payFrequency?: SubContractorSubContractorPayFrequencyEnum;

  @Metadata({ data: "json, name=PaymentMethod" })
  paymentMethod?: SubContractorSubContractorPaymentMethodEnum;

  @Metadata({ data: "json, name=Region" })
  region?: SubContractorSubContractorRegionEnum;

  @Metadata({ data: "json, name=Revision" })
  revision?: number;

  @Metadata({ data: "json, name=TaxationStatus" })
  taxationStatus?: SubContractorSubContractorTaxationStatusEnum;

  @Metadata({ data: "json, name=Telephone" })
  telephone?: string;

  @Metadata({ data: "json, name=Territory" })
  territory?: SubContractorSubContractorTerritoryEnum;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=TradingName" })
  tradingName?: string;

  @Metadata({ data: "json, name=UniqueTaxReference" })
  uniqueTaxReference?: string;

  @Metadata({ data: "json, name=VatRegistered" })
  vatRegistered?: boolean;

  @Metadata({ data: "json, name=VatRegistrationNumber" })
  vatRegistrationNumber?: string;

  @Metadata({ data: "json, name=VerificationDate" })
  verificationDate?: Date;

  @Metadata({ data: "json, name=VerificationNumber" })
  verificationNumber?: string;

  @Metadata({ data: "json, name=WorksNumber" })
  worksNumber?: string;
}


export class SubContractor extends SpeakeasyBase {
  @Metadata({ data: "json, name=SubContractor" })
  subContractor?: SubContractorSubContractor;
}
