from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import country_enum

class TaxCategoryTaxCategoryEnum(str, Enum):
    STANDARD = "standard"
    ZERO_RATED = "zero_rated"
    REVERSE_CHARGE = "reverse_charge"
    INTRA_COMMUNITY = "intra_community"
    EXEMPT = "exempt"
    EXPORT = "export"
    OUTSIDE_SCOPE = "outside_scope"
    REGULATION33_EXEMPT = "regulation33_exempt"
    NONREGULATION33_EXEMPT = "nonregulation33_exempt"
    DEEMED_SUPPLY = "deemed_supply"
    SRCA_S = "srca_s"
    SRCA_C = "srca_c"
    NOT_REGISTERED = "not_registered"
    SALES_TAX = "sales_tax"
    SALES_TAX_WORK = "sales_tax_work"
    SERVICE_TAX = "service_tax"
    SERVICE_TAX_IMPORT = "service_tax_import"
    SALES_TO_EXPORT_MARKET = "sales_to_export_market"
    SALES_TO_SPECIAL_AREA = "sales_to_special_area"
    SALES_TO_DESIGNATED_AREA = "sales_to_designated_area"
    EXEMPTION_SCHEDULE_A = "exemption_schedule_a"
    EXEMPTION_SCHEDULE_B = "exemption_schedule_b"
    EXEMPTION_SCHEDULE_C_A = "exemption_schedule_c_a"
    EXEMPTION_SCHEDULE_C_B = "exemption_schedule_c_b"
    EXEMPTION_SCHEDULE_C_C = "exemption_schedule_c_c"
    EXEMPTION_SERVICE_TAX = "exemption_service_tax"


@dataclass_json
@dataclass
class Tax:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    category: Optional[TaxCategoryTaxCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    country: country_enum.CountryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    
