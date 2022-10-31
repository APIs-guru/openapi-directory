package operations

import (
"openapi/pkg/models/shared")

type JourneyJourneyResultsPathParams struct {
    From string `pathParam:"style=simple,explode=false,name=from"`
    To string `pathParam:"style=simple,explode=false,name=to"`
    
}


type JourneyJourneyResultsAccessibilityPreferenceEnum string

const (
    JourneyJourneyResultsAccessibilityPreferenceEnumNoRequirements JourneyJourneyResultsAccessibilityPreferenceEnum = "NoRequirements"
JourneyJourneyResultsAccessibilityPreferenceEnumNoSolidStairs JourneyJourneyResultsAccessibilityPreferenceEnum = "NoSolidStairs"
JourneyJourneyResultsAccessibilityPreferenceEnumNoEscalators JourneyJourneyResultsAccessibilityPreferenceEnum = "NoEscalators"
JourneyJourneyResultsAccessibilityPreferenceEnumNoElevators JourneyJourneyResultsAccessibilityPreferenceEnum = "NoElevators"
JourneyJourneyResultsAccessibilityPreferenceEnumStepFreeToVehicle JourneyJourneyResultsAccessibilityPreferenceEnum = "StepFreeToVehicle"
JourneyJourneyResultsAccessibilityPreferenceEnumStepFreeToPlatform JourneyJourneyResultsAccessibilityPreferenceEnum = "StepFreeToPlatform"
)



type JourneyJourneyResultsBikeProficiencyEnum string

const (
    JourneyJourneyResultsBikeProficiencyEnumEasy JourneyJourneyResultsBikeProficiencyEnum = "Easy"
JourneyJourneyResultsBikeProficiencyEnumModerate JourneyJourneyResultsBikeProficiencyEnum = "Moderate"
JourneyJourneyResultsBikeProficiencyEnumFast JourneyJourneyResultsBikeProficiencyEnum = "Fast"
)



type JourneyJourneyResultsCyclePreferenceEnum string

const (
    JourneyJourneyResultsCyclePreferenceEnumNone JourneyJourneyResultsCyclePreferenceEnum = "None"
JourneyJourneyResultsCyclePreferenceEnumLeaveAtStation JourneyJourneyResultsCyclePreferenceEnum = "LeaveAtStation"
JourneyJourneyResultsCyclePreferenceEnumTakeOnTransport JourneyJourneyResultsCyclePreferenceEnum = "TakeOnTransport"
JourneyJourneyResultsCyclePreferenceEnumAllTheWay JourneyJourneyResultsCyclePreferenceEnum = "AllTheWay"
JourneyJourneyResultsCyclePreferenceEnumCycleHire JourneyJourneyResultsCyclePreferenceEnum = "CycleHire"
)



type JourneyJourneyResultsJourneyPreferenceEnum string

const (
    JourneyJourneyResultsJourneyPreferenceEnumLeastInterchange JourneyJourneyResultsJourneyPreferenceEnum = "LeastInterchange"
JourneyJourneyResultsJourneyPreferenceEnumLeastTime JourneyJourneyResultsJourneyPreferenceEnum = "LeastTime"
JourneyJourneyResultsJourneyPreferenceEnumLeastWalking JourneyJourneyResultsJourneyPreferenceEnum = "LeastWalking"
)



type JourneyJourneyResultsTimeIsEnum string

const (
    JourneyJourneyResultsTimeIsEnumArriving JourneyJourneyResultsTimeIsEnum = "Arriving"
JourneyJourneyResultsTimeIsEnumDeparting JourneyJourneyResultsTimeIsEnum = "Departing"
)



type JourneyJourneyResultsWalkingSpeedEnum string

const (
    JourneyJourneyResultsWalkingSpeedEnumSlow JourneyJourneyResultsWalkingSpeedEnum = "Slow"
JourneyJourneyResultsWalkingSpeedEnumAverage JourneyJourneyResultsWalkingSpeedEnum = "Average"
JourneyJourneyResultsWalkingSpeedEnumFast JourneyJourneyResultsWalkingSpeedEnum = "Fast"
)


type JourneyJourneyResultsQueryParams struct {
    AccessibilityPreference []JourneyJourneyResultsAccessibilityPreferenceEnum `queryParam:"style=form,explode=true,name=accessibilityPreference"`
    Adjustment *string `queryParam:"style=form,explode=true,name=adjustment"`
    AlternativeCycle *bool `queryParam:"style=form,explode=true,name=alternativeCycle"`
    AlternativeWalking *bool `queryParam:"style=form,explode=true,name=alternativeWalking"`
    ApplyHTMLMarkup *bool `queryParam:"style=form,explode=true,name=applyHtmlMarkup"`
    BikeProficiency []JourneyJourneyResultsBikeProficiencyEnum `queryParam:"style=form,explode=true,name=bikeProficiency"`
    CyclePreference *JourneyJourneyResultsCyclePreferenceEnum `queryParam:"style=form,explode=true,name=cyclePreference"`
    Date *string `queryParam:"style=form,explode=true,name=date"`
    FromName *string `queryParam:"style=form,explode=true,name=fromName"`
    JourneyPreference *JourneyJourneyResultsJourneyPreferenceEnum `queryParam:"style=form,explode=true,name=journeyPreference"`
    MaxTransferMinutes *string `queryParam:"style=form,explode=true,name=maxTransferMinutes"`
    MaxWalkingMinutes *string `queryParam:"style=form,explode=true,name=maxWalkingMinutes"`
    Mode []string `queryParam:"style=form,explode=true,name=mode"`
    NationalSearch *bool `queryParam:"style=form,explode=true,name=nationalSearch"`
    RouteBetweenEntrances *bool `queryParam:"style=form,explode=true,name=routeBetweenEntrances"`
    TaxiOnlyTrip *bool `queryParam:"style=form,explode=true,name=taxiOnlyTrip"`
    Time *string `queryParam:"style=form,explode=true,name=time"`
    TimeIs *JourneyJourneyResultsTimeIsEnum `queryParam:"style=form,explode=true,name=timeIs"`
    ToName *string `queryParam:"style=form,explode=true,name=toName"`
    UseMultiModalCall *bool `queryParam:"style=form,explode=true,name=useMultiModalCall"`
    UseRealTimeLiveArrivals *bool `queryParam:"style=form,explode=true,name=useRealTimeLiveArrivals"`
    Via *string `queryParam:"style=form,explode=true,name=via"`
    ViaName *string `queryParam:"style=form,explode=true,name=viaName"`
    WalkingOptimization *bool `queryParam:"style=form,explode=true,name=walkingOptimization"`
    WalkingSpeed *JourneyJourneyResultsWalkingSpeedEnum `queryParam:"style=form,explode=true,name=walkingSpeed"`
    
}

type JourneyJourneyResultsRequest struct {
    PathParams JourneyJourneyResultsPathParams 
    QueryParams JourneyJourneyResultsQueryParams 
    
}

type JourneyJourneyResultsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesJourneyPlannerItineraryResult *shared.TflAPIPresentationEntitiesJourneyPlannerItineraryResult 
    
}

