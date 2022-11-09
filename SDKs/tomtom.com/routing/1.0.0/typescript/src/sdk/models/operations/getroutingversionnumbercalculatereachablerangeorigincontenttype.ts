import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentType" })
  contentType: shared.ContentTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}

export enum GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum {
    Combustion = "combustion"
,    Electric = "electric"
}


export class GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=accelerationEfficiency" })
  accelerationEfficiency?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=arriveAt" })
  arriveAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=auxiliaryPowerInLitersPerHour" })
  auxiliaryPowerInLitersPerHour?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=avoid" })
  avoid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=constantSpeedConsumptionInLitersPerHundredkm" })
  constantSpeedConsumptionInLitersPerHundredkm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=constantSpeedConsumptionInkWhPerHundredkm" })
  constantSpeedConsumptionInkWhPerHundredkm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currentFuelInLiters" })
  currentFuelInLiters?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=decelerationEfficiency" })
  decelerationEfficiency?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=departAt" })
  departAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=downhillEfficiency" })
  downhillEfficiency?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=energyBudgetInkWh" })
  energyBudgetInkWh?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fuelBudgetInLiters" })
  fuelBudgetInLiters?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fuelEnergyDensityInMJoulesPerLiter" })
  fuelEnergyDensityInMJoulesPerLiter?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hilliness" })
  hilliness?: shared.HillinessEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=report" })
  report?: shared.ReportEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=routeType" })
  routeType?: shared.RouteTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeBudgetInSec" })
  timeBudgetInSec?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=traffic" })
  traffic?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travelMode" })
  travelMode?: shared.TravelModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uphillEfficiency" })
  uphillEfficiency?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicleAxleWeight" })
  vehicleAxleWeight?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicleCommercial" })
  vehicleCommercial?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicleEngineType" })
  vehicleEngineType?: GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicleHeight" })
  vehicleHeight?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicleLength" })
  vehicleLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicleLoadType" })
  vehicleLoadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicleMaxSpeed" })
  vehicleMaxSpeed?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicleWeight" })
  vehicleWeight?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicleWidth" })
  vehicleWidth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=windingness" })
  windingness?: shared.WindingnessEnum;
}


export class GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams;

  @Metadata()
  queryParams: GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams;
}


export class GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
