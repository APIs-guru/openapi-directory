from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class JourneyJourneyResultsPathParams:
    from_: str = field(default=None, metadata={'path_param': { 'field_name': 'from', 'style': 'simple', 'explode': False }})
    to: str = field(default=None, metadata={'path_param': { 'field_name': 'to', 'style': 'simple', 'explode': False }})
    
class JourneyJourneyResultsAccessibilityPreferenceEnum(str, Enum):
    NO_REQUIREMENTS = "NoRequirements"
    NO_SOLID_STAIRS = "NoSolidStairs"
    NO_ESCALATORS = "NoEscalators"
    NO_ELEVATORS = "NoElevators"
    STEP_FREE_TO_VEHICLE = "StepFreeToVehicle"
    STEP_FREE_TO_PLATFORM = "StepFreeToPlatform"

class JourneyJourneyResultsBikeProficiencyEnum(str, Enum):
    EASY = "Easy"
    MODERATE = "Moderate"
    FAST = "Fast"

class JourneyJourneyResultsCyclePreferenceEnum(str, Enum):
    NONE = "None"
    LEAVE_AT_STATION = "LeaveAtStation"
    TAKE_ON_TRANSPORT = "TakeOnTransport"
    ALL_THE_WAY = "AllTheWay"
    CYCLE_HIRE = "CycleHire"

class JourneyJourneyResultsJourneyPreferenceEnum(str, Enum):
    LEAST_INTERCHANGE = "LeastInterchange"
    LEAST_TIME = "LeastTime"
    LEAST_WALKING = "LeastWalking"

class JourneyJourneyResultsTimeIsEnum(str, Enum):
    ARRIVING = "Arriving"
    DEPARTING = "Departing"

class JourneyJourneyResultsWalkingSpeedEnum(str, Enum):
    SLOW = "Slow"
    AVERAGE = "Average"
    FAST = "Fast"


@dataclass
class JourneyJourneyResultsQueryParams:
    accessibility_preference: Optional[List[JourneyJourneyResultsAccessibilityPreferenceEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'accessibilityPreference', 'style': 'form', 'explode': True }})
    adjustment: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'adjustment', 'style': 'form', 'explode': True }})
    alternative_cycle: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'alternativeCycle', 'style': 'form', 'explode': True }})
    alternative_walking: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'alternativeWalking', 'style': 'form', 'explode': True }})
    apply_html_markup: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'applyHtmlMarkup', 'style': 'form', 'explode': True }})
    bike_proficiency: Optional[List[JourneyJourneyResultsBikeProficiencyEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'bikeProficiency', 'style': 'form', 'explode': True }})
    cycle_preference: Optional[JourneyJourneyResultsCyclePreferenceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'cyclePreference', 'style': 'form', 'explode': True }})
    date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    from_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromName', 'style': 'form', 'explode': True }})
    journey_preference: Optional[JourneyJourneyResultsJourneyPreferenceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'journeyPreference', 'style': 'form', 'explode': True }})
    max_transfer_minutes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxTransferMinutes', 'style': 'form', 'explode': True }})
    max_walking_minutes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxWalkingMinutes', 'style': 'form', 'explode': True }})
    mode: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mode', 'style': 'form', 'explode': True }})
    national_search: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'nationalSearch', 'style': 'form', 'explode': True }})
    route_between_entrances: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'routeBetweenEntrances', 'style': 'form', 'explode': True }})
    taxi_only_trip: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'taxiOnlyTrip', 'style': 'form', 'explode': True }})
    time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    time_is: Optional[JourneyJourneyResultsTimeIsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'timeIs', 'style': 'form', 'explode': True }})
    to_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toName', 'style': 'form', 'explode': True }})
    use_multi_modal_call: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useMultiModalCall', 'style': 'form', 'explode': True }})
    use_real_time_live_arrivals: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useRealTimeLiveArrivals', 'style': 'form', 'explode': True }})
    via: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'via', 'style': 'form', 'explode': True }})
    via_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'viaName', 'style': 'form', 'explode': True }})
    walking_optimization: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'walkingOptimization', 'style': 'form', 'explode': True }})
    walking_speed: Optional[JourneyJourneyResultsWalkingSpeedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'walkingSpeed', 'style': 'form', 'explode': True }})
    

@dataclass
class JourneyJourneyResultsRequest:
    path_params: JourneyJourneyResultsPathParams = field(default=None)
    query_params: JourneyJourneyResultsQueryParams = field(default=None)
    

@dataclass
class JourneyJourneyResultsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_journey_planner_itinerary_result: Optional[shared.TflAPIPresentationEntitiesJourneyPlannerItineraryResult] = field(default=None)
    
