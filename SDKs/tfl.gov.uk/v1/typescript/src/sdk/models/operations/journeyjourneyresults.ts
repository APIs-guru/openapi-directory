import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JourneyJourneyResultsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=to" })
  to: string;
}

export enum JourneyJourneyResultsAccessibilityPreferenceEnum {
    NoRequirements = "NoRequirements",
    NoSolidStairs = "NoSolidStairs",
    NoEscalators = "NoEscalators",
    NoElevators = "NoElevators",
    StepFreeToVehicle = "StepFreeToVehicle",
    StepFreeToPlatform = "StepFreeToPlatform"
}

export enum JourneyJourneyResultsBikeProficiencyEnum {
    Easy = "Easy",
    Moderate = "Moderate",
    Fast = "Fast"
}

export enum JourneyJourneyResultsCyclePreferenceEnum {
    None = "None",
    LeaveAtStation = "LeaveAtStation",
    TakeOnTransport = "TakeOnTransport",
    AllTheWay = "AllTheWay",
    CycleHire = "CycleHire"
}

export enum JourneyJourneyResultsJourneyPreferenceEnum {
    LeastInterchange = "LeastInterchange",
    LeastTime = "LeastTime",
    LeastWalking = "LeastWalking"
}

export enum JourneyJourneyResultsTimeIsEnum {
    Arriving = "Arriving",
    Departing = "Departing"
}

export enum JourneyJourneyResultsWalkingSpeedEnum {
    Slow = "Slow",
    Average = "Average",
    Fast = "Fast"
}


export class JourneyJourneyResultsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessibilityPreference" })
  accessibilityPreference?: JourneyJourneyResultsAccessibilityPreferenceEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adjustment" })
  adjustment?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alternativeCycle" })
  alternativeCycle?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alternativeWalking" })
  alternativeWalking?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=applyHtmlMarkup" })
  applyHtmlMarkup?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bikeProficiency" })
  bikeProficiency?: JourneyJourneyResultsBikeProficiencyEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cyclePreference" })
  cyclePreference?: JourneyJourneyResultsCyclePreferenceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromName" })
  fromName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=journeyPreference" })
  journeyPreference?: JourneyJourneyResultsJourneyPreferenceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxTransferMinutes" })
  maxTransferMinutes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxWalkingMinutes" })
  maxWalkingMinutes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nationalSearch" })
  nationalSearch?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeBetweenEntrances" })
  routeBetweenEntrances?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxiOnlyTrip" })
  taxiOnlyTrip?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeIs" })
  timeIs?: JourneyJourneyResultsTimeIsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toName" })
  toName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useMultiModalCall" })
  useMultiModalCall?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useRealTimeLiveArrivals" })
  useRealTimeLiveArrivals?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=via" })
  via?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=viaName" })
  viaName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=walkingOptimization" })
  walkingOptimization?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=walkingSpeed" })
  walkingSpeed?: JourneyJourneyResultsWalkingSpeedEnum;
}


export class JourneyJourneyResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JourneyJourneyResultsPathParams;

  @SpeakeasyMetadata()
  queryParams: JourneyJourneyResultsQueryParams;
}


export class JourneyJourneyResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesJourneyPlannerItineraryResult?: shared.TflApiPresentationEntitiesJourneyPlannerItineraryResult;
}
