from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubContractorSubContractorAddress:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address2' }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address3' }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address4' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Postcode' }})
    

@dataclass_json
@dataclass
class SubContractorSubContractorBankAccount:
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountName' }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountNumber' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    sort_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortCode' }})
    
class SubContractorSubContractorBusinessTypeEnum(str, Enum):
    SOLE_TRADER = "SoleTrader"
    COMPANY = "Company"
    PARTNERSHIP = "Partnership"
    TRUST = "Trust"

class SubContractorSubContractorPayFrequencyEnum(str, Enum):
    MONTHLY = "Monthly"
    WEEKLY = "Weekly"

class SubContractorSubContractorPaymentMethodEnum(str, Enum):
    NOT_SET = "NotSet"
    CASH = "Cash"
    CHEQUE = "Cheque"
    BACS = "BACS"
    FASTER_PAYMENTS = "FasterPayments"
    OTHER = "Other"

class SubContractorSubContractorRegionEnum(str, Enum):
    NOT_SET = "NotSet"
    ENGLAND = "England"
    SCOTLAND = "Scotland"
    WALES = "Wales"

class SubContractorSubContractorTaxationStatusEnum(str, Enum):
    UNMATCHED = "Unmatched"
    NET = "Net"
    GROSS = "Gross"

class SubContractorSubContractorTerritoryEnum(str, Enum):
    UNITED_KINGDOM = "UnitedKingdom"


@dataclass_json
@dataclass
class SubContractorSubContractor:
    address: Optional[SubContractorSubContractorAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    bank_account: Optional[SubContractorSubContractorBankAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankAccount' }})
    business_type: Optional[SubContractorSubContractorBusinessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessType' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompanyName' }})
    company_registration_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompanyRegistrationNumber' }})
    deactivated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deactivated' }})
    effective_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EffectiveDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstName' }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initials' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastName' }})
    meta_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetaData' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MiddleName' }})
    ni_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NiNumber' }})
    partnership_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartnershipName' }})
    partnership_unique_tax_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartnershipUniqueTaxReference' }})
    pay_frequency: Optional[SubContractorSubContractorPayFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayFrequency' }})
    payment_method: Optional[SubContractorSubContractorPaymentMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentMethod' }})
    region: Optional[SubContractorSubContractorRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Revision' }})
    taxation_status: Optional[SubContractorSubContractorTaxationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxationStatus' }})
    telephone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Telephone' }})
    territory: Optional[SubContractorSubContractorTerritoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Territory' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    trading_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TradingName' }})
    unique_tax_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UniqueTaxReference' }})
    vat_registered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VatRegistered' }})
    vat_registration_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VatRegistrationNumber' }})
    verification_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerificationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    verification_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerificationNumber' }})
    works_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorksNumber' }})
    

@dataclass_json
@dataclass
class SubContractor:
    sub_contractor: Optional[SubContractorSubContractor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubContractor' }})
    
