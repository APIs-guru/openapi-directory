from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogqueryexact
from . import catalogqueryitemvariationsforitemoptionvalues
from . import catalogqueryitemsforitemoptions
from . import catalogqueryitemsformodifierlist
from . import catalogqueryitemsfortax
from . import catalogqueryprefix
from . import catalogqueryrange
from . import catalogqueryset
from . import catalogquerysortedattribute
from . import catalogquerytext


@dataclass_json
@dataclass
class CatalogQuery:
    exact_query: Optional[catalogqueryexact.CatalogQueryExact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exact_query' }})
    item_variations_for_item_option_values_query: Optional[catalogqueryitemvariationsforitemoptionvalues.CatalogQueryItemVariationsForItemOptionValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_variations_for_item_option_values_query' }})
    items_for_item_options_query: Optional[catalogqueryitemsforitemoptions.CatalogQueryItemsForItemOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_for_item_options_query' }})
    items_for_modifier_list_query: Optional[catalogqueryitemsformodifierlist.CatalogQueryItemsForModifierList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_for_modifier_list_query' }})
    items_for_tax_query: Optional[catalogqueryitemsfortax.CatalogQueryItemsForTax] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_for_tax_query' }})
    prefix_query: Optional[catalogqueryprefix.CatalogQueryPrefix] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix_query' }})
    range_query: Optional[catalogqueryrange.CatalogQueryRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range_query' }})
    set_query: Optional[catalogqueryset.CatalogQuerySet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'set_query' }})
    sorted_attribute_query: Optional[catalogquerysortedattribute.CatalogQuerySortedAttribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sorted_attribute_query' }})
    text_query: Optional[catalogquerytext.CatalogQueryText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text_query' }})
    
