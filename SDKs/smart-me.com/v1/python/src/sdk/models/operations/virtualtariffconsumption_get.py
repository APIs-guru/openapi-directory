from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class VirtualTariffConsumptionGetQueryParams:
    end_date: datetime = field(metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    folder_id: str = field(metadata={'query_param': { 'field_name': 'folderId', 'style': 'form', 'explode': True }})
    start_date: datetime = field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclass
class VirtualTariffConsumptionGetRequest:
    query_params: VirtualTariffConsumptionGetQueryParams = field()
    

@dataclass
class VirtualTariffConsumptionGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    virtual_tariff_consumption_data: Optional[List[shared.VirtualTariffConsumptionData]] = field(default=None)
    
