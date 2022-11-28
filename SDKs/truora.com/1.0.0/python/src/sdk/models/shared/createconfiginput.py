from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class CreateConfigInputCountryEnum(str, Enum):
    ALL = "ALL"
    BR = "BR"
    CL = "CL"
    CO = "CO"
    CR = "CR"
    EC = "EC"
    MX = "MX"
    PE = "PE"
    AR = "AR"


@dataclass
class CreateConfigInput:
    r"""CreateConfigInput
    Represents paramaters required to create a score configuration
    """
    
    country: CreateConfigInputCountryEnum = field(metadata={'form': { 'field_name': 'country' }})
    type: str = field(metadata={'form': { 'field_name': 'type' }})
    dataset_affiliations_and_insurances: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'dataset_affiliations_and_insurances' }})
    dataset_alert_in_media: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'dataset_alert_in_media' }})
    dataset_business_background: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'dataset_business_background' }})
    dataset_criminal_record: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'dataset_criminal_record' }})
    dataset_driving_licenses: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'dataset_driving_licenses' }})
    dataset_international_background: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'dataset_international_background' }})
    dataset_legal_background: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'dataset_legal_background' }})
    dataset_personal_identity: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'dataset_personal_identity' }})
    dataset_professional_background: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'dataset_professional_background' }})
    dataset_taxes_and_finances: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'dataset_taxes_and_finances' }})
    dataset_traffic_fines: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'dataset_traffic_fines' }})
    dataset_vehicle_information: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'dataset_vehicle_information' }})
    dataset_vehicle_permits: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'dataset_vehicle_permits' }})
    
