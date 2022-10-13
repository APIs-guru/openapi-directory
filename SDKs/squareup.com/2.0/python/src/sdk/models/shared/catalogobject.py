from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogv1id
from . import catalogcategory
from . import catalogcustomattributedefinition
from . import catalogcustomattributevalue
from . import catalogdiscount
from . import catalogimage
from . import catalogitem
from . import catalogitemoption
from . import catalogitemoptionvalue
from . import catalogitemvariation
from . import catalogmeasurementunit
from . import catalogmodifier
from . import catalogmodifierlist
from . import catalogpricingrule
from . import catalogproductset
from . import catalogquickamountssettings
from . import catalogsubscriptionplan
from . import catalogtax
from . import catalogtimeperiod


@dataclass_json
@dataclass
class CatalogObject:
    absent_at_location_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absent_at_location_ids' }})
    catalog_v1_ids: Optional[List[catalogv1id.CatalogV1ID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_v1_ids' }})
    category_data: Optional[catalogcategory.CatalogCategory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_data' }})
    custom_attribute_definition_data: Optional[catalogcustomattributedefinition.CatalogCustomAttributeDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_attribute_definition_data' }})
    custom_attribute_values: Optional[dict[str, catalogcustomattributevalue.CatalogCustomAttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_attribute_values' }})
    discount_data: Optional[catalogdiscount.CatalogDiscount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_data' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_data: Optional[catalogimage.CatalogImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_data' }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_id' }})
    is_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_deleted' }})
    item_data: Optional[catalogitem.CatalogItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_data' }})
    item_option_data: Optional[catalogitemoption.CatalogItemOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_option_data' }})
    item_option_value_data: Optional[catalogitemoptionvalue.CatalogItemOptionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_option_value_data' }})
    item_variation_data: Optional[catalogitemvariation.CatalogItemVariation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_variation_data' }})
    measurement_unit_data: Optional[catalogmeasurementunit.CatalogMeasurementUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurement_unit_data' }})
    modifier_data: Optional[catalogmodifier.CatalogModifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifier_data' }})
    modifier_list_data: Optional[catalogmodifierlist.CatalogModifierList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifier_list_data' }})
    present_at_all_locations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'present_at_all_locations' }})
    present_at_location_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'present_at_location_ids' }})
    pricing_rule_data: Optional[catalogpricingrule.CatalogPricingRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing_rule_data' }})
    product_set_data: Optional[catalogproductset.CatalogProductSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_set_data' }})
    quick_amounts_settings_data: Optional[catalogquickamountssettings.CatalogQuickAmountsSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quick_amounts_settings_data' }})
    subscription_plan_data: Optional[catalogsubscriptionplan.CatalogSubscriptionPlan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription_plan_data' }})
    tax_data: Optional[catalogtax.CatalogTax] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_data' }})
    time_period_data: Optional[catalogtimeperiod.CatalogTimePeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_period_data' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
