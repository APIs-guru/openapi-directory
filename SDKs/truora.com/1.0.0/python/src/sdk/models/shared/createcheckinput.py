from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class CreateCheckInputCountryEnum(str, Enum):
    ALL = "ALL"
    BR = "BR"
    CL = "CL"
    CO = "CO"
    CR = "CR"
    EC = "EC"
    MX = "MX"
    PE = "PE"
    AR = "AR"

class CreateCheckInputRegionEnum(str, Enum):
    DF = "DF"
    AC = "AC"
    AL = "AL"
    AP = "AP"
    AM = "AM"
    BA = "BA"
    CE = "CE"
    ES = "ES"
    GO = "GO"
    MA = "MA"
    MT = "MT"
    MS = "MS"
    MG = "MG"
    PA = "PA"
    PB = "PB"
    PR = "PR"
    PE = "PE"
    PI = "PI"
    RJ = "RJ"
    RN = "RN"
    RS = "RS"
    RO = "RO"
    RR = "RR"
    SC = "SC"
    SP = "SP"
    SE = "SE"
    TO = "TO"

class CreateCheckInputTypeEnum(str, Enum):
    PERSON = "person"
    VEHICLE = "vehicle"
    COMPANY = "company"
    CUSTOM_TYPE_NAME = "custom_type_name"


@dataclass
class CreateCheckInput:
    r"""CreateCheckInput
    Represents paramaters required to create a background check
    """
    
    country: CreateCheckInputCountryEnum = field(metadata={'form': { 'field_name': 'country' }})
    type: CreateCheckInputTypeEnum = field(metadata={'form': { 'field_name': 'type' }})
    birth_certificate: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'birth_certificate' }})
    company_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'company_name' }})
    date_of_birth: Optional[date] = field(default=None, metadata={'form': { 'field_name': 'date_of_birth' }})
    diplomatic_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'diplomatic_id' }})
    driver_license: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'driver_license' }})
    escrow: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'escrow' }})
    first_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'first_name' }})
    force_creation: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'force_creation' }})
    foreign_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'foreign_id' }})
    issue_date: Optional[date] = field(default=None, metadata={'form': { 'field_name': 'issue_date' }})
    last_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'last_name' }})
    license_plate: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'license_plate' }})
    national_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'national_id' }})
    native_country: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'native_country' }})
    owner_document_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'owner_document_id' }})
    owner_document_type: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'owner_document_type' }})
    passport: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'passport' }})
    payment_date: Optional[date] = field(default=None, metadata={'form': { 'field_name': 'payment_date' }})
    pep: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'pep' }})
    phone_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'phone_number' }})
    professional_card: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'professional_card' }})
    ptp: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ptp' }})
    region: Optional[CreateCheckInputRegionEnum] = field(default=None, metadata={'form': { 'field_name': 'region' }})
    report_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'report_id' }})
    state_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'state_id' }})
    tax_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'tax_id' }})
    user_authorized: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'user_authorized' }})
    vehicle_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'vehicle_id' }})
    verification_code: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'verification_code' }})
    watch: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'watch' }})
    
