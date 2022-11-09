import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JourneyJourneyResultsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=from" })
  from: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=to" })
  to: string;
}

export enum JourneyJourneyResultsAccessibilityPreferenceEnum {
    NoRequirements = "NoRequirements"
,    NoSolidStairs = "NoSolidStairs"
,    NoEscalators = "NoEscalators"
,    NoElevators = "NoElevators"
,    StepFreeToVehicle = "StepFreeToVehicle"
,    StepFreeToPlatform = "StepFreeToPlatform"
}

export enum JourneyJourneyResultsBikeProficiencyEnum {
    Easy = "Easy"
,    Moderate = "Moderate"
,    Fast = "Fast"
}

export enum JourneyJourneyResultsCyclePreferenceEnum {
    None = "None"
,    LeaveAtStation = "LeaveAtStation"
,    TakeOnTransport = "TakeOnTransport"
,    AllTheWay = "AllTheWay"
,    CycleHire = "CycleHire"
}

export enum JourneyJourneyResultsJourneyPreferenceEnum {
    LeastInterchange = "LeastInterchange"
,    LeastTime = "LeastTime"
,    LeastWalking = "LeastWalking"
}

export enum JourneyJourneyResultsTimeIsEnum {
    Arriving = "Arriving"
,    Departing = "Departing"
}

export enum JourneyJourneyResultsWalkingSpeedEnum {
    Slow = "Slow"
,    Average = "Average"
,    Fast = "Fast"
}


export class JourneyJourneyResultsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=accessibilityPreference" })
  accessibilityPreference?: JourneyJourneyResultsAccessibilityPreferenceEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=adjustment" })
  adjustment?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alternativeCycle" })
  alternativeCycle?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alternativeWalking" })
  alternativeWalking?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=applyHtmlMarkup" })
  applyHtmlMarkup?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bikeProficiency" })
  bikeProficiency?: JourneyJourneyResultsBikeProficiencyEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=cyclePreference" })
  cyclePreference?: JourneyJourneyResultsCyclePreferenceEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromName" })
  fromName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=journeyPreference" })
  journeyPreference?: JourneyJourneyResultsJourneyPreferenceEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxTransferMinutes" })
  maxTransferMinutes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxWalkingMinutes" })
  maxWalkingMinutes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=nationalSearch" })
  nationalSearch?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=routeBetweenEntrances" })
  routeBetweenEntrances?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=taxiOnlyTrip" })
  taxiOnlyTrip?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeIs" })
  timeIs?: JourneyJourneyResultsTimeIsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toName" })
  toName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useMultiModalCall" })
  useMultiModalCall?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useRealTimeLiveArrivals" })
  useRealTimeLiveArrivals?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=via" })
  via?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=viaName" })
  viaName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=walkingOptimization" })
  walkingOptimization?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=walkingSpeed" })
  walkingSpeed?: JourneyJourneyResultsWalkingSpeedEnum;
}


export class JourneyJourneyResultsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JourneyJourneyResultsPathParams;

  @Metadata()
  queryParams: JourneyJourneyResultsQueryParams;
}


export class JourneyJourneyResultsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tflApiPresentationEntitiesJourneyPlannerItineraryResult?: shared.TflApiPresentationEntitiesJourneyPlannerItineraryResult;
}
