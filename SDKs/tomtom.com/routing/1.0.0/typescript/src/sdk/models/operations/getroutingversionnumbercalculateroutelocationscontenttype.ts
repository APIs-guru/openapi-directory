import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentType" })
  contentType: shared.ContentTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locations" })
  locations: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accelerationEfficiency" })
  accelerationEfficiency?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alternativeType" })
  alternativeType?: shared.AlternativeTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=arriveAt" })
  arriveAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auxiliaryPowerInLitersPerHour" })
  auxiliaryPowerInLitersPerHour?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=avoid" })
  avoid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=computeBestOrder" })
  computeBestOrder?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=computeTravelTimeFor" })
  computeTravelTimeFor?: shared.ComputeTravelTimeForEnum;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuelEnergyDensityInMJoulesPerLiter" })
  fuelEnergyDensityInMJoulesPerLiter?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hilliness" })
  hilliness?: shared.HillinessEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=instructionsType" })
  instructionsType?: shared.InstructionsTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAlternatives" })
  maxAlternatives?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDeviationDistance" })
  minDeviationDistance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDeviationTime" })
  minDeviationTime?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report" })
  report?: shared.ReportEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeRepresentation" })
  routeRepresentation?: shared.RouteRepresentationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeType" })
  routeType?: shared.RouteTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sectionType" })
  sectionType?: string;

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
  vehicleEngineType?: shared.VehicleEngineTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicleHeading" })
  vehicleHeading?: number;

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


export class GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams;

  @SpeakeasyMetadata()
  queryParams: GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams;
}


export class GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
