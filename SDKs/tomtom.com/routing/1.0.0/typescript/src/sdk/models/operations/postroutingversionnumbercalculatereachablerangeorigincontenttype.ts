import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentType" })
  contentType: shared.ContentTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}

export enum PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum {
    Combustion = "combustion",
    Electric = "electric"
}


export class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accelerationEfficiency" })
  accelerationEfficiency?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=arriveAt" })
  arriveAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auxiliaryPowerInLitersPerHour" })
  auxiliaryPowerInLitersPerHour?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=avoid" })
  avoid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constantSpeedConsumptionInLitersPerHundredkm" })
  constantSpeedConsumptionInLitersPerHundredkm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constantSpeedConsumptionInkWhPerHundredkm" })
  constantSpeedConsumptionInkWhPerHundredkm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentFuelInLiters" })
  currentFuelInLiters?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=decelerationEfficiency" })
  decelerationEfficiency?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departAt" })
  departAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=downhillEfficiency" })
  downhillEfficiency?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=energyBudgetInkWh" })
  energyBudgetInkWh?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuelBudgetInLiters" })
  fuelBudgetInLiters?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuelEnergyDensityInMJoulesPerLiter" })
  fuelEnergyDensityInMJoulesPerLiter?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hilliness" })
  hilliness?: shared.HillinessEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report" })
  report?: shared.ReportEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeType" })
  routeType?: shared.RouteTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeBudgetInSec" })
  timeBudgetInSec?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=traffic" })
  traffic?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelMode" })
  travelMode?: shared.TravelModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uphillEfficiency" })
  uphillEfficiency?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicleAxleWeight" })
  vehicleAxleWeight?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicleCommercial" })
  vehicleCommercial?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicleEngineType" })
  vehicleEngineType?: PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicleHeight" })
  vehicleHeight?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicleLength" })
  vehicleLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicleLoadType" })
  vehicleLoadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicleMaxSpeed" })
  vehicleMaxSpeed?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicleWeight" })
  vehicleWeight?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicleWidth" })
  vehicleWidth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=windingness" })
  windingness?: shared.WindingnessEnum;
}


export class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  calculateReachableRangePostDataParameters?: shared.CalculateReachableRangePostDataParameters;
}


export class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams;

  @SpeakeasyMetadata()
  queryParams: PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams;

  @SpeakeasyMetadata()
  request?: PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests;
}


export class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
