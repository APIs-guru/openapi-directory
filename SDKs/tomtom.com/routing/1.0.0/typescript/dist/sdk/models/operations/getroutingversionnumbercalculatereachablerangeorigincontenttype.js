var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams = /** @class */ (function (_super) {
    __extends(GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams, _super);
    function GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=contentType" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams.prototype, "contentType", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=origin" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams.prototype, "origin", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams.prototype, "versionNumber", void 0);
    return GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams;
}(SpeakeasyBase));
export { GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams };
export var GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum;
(function (GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum) {
    GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum["Combustion"] = "combustion";
    GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum["Electric"] = "electric";
})(GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum || (GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum = {}));
var GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams = /** @class */ (function (_super) {
    __extends(GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams, _super);
    function GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=accelerationEfficiency" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "accelerationEfficiency", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=arriveAt" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "arriveAt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=auxiliaryPowerInLitersPerHour" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "auxiliaryPowerInLitersPerHour", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=avoid" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "avoid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=constantSpeedConsumptionInLitersPerHundredkm" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "constantSpeedConsumptionInLitersPerHundredkm", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=constantSpeedConsumptionInkWhPerHundredkm" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "constantSpeedConsumptionInkWhPerHundredkm", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currentFuelInLiters" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "currentFuelInLiters", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=decelerationEfficiency" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "decelerationEfficiency", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=departAt" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "departAt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=downhillEfficiency" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "downhillEfficiency", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=energyBudgetInkWh" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "energyBudgetInkWh", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fuelBudgetInLiters" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "fuelBudgetInLiters", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fuelEnergyDensityInMJoulesPerLiter" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "fuelEnergyDensityInMJoulesPerLiter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=hilliness" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "hilliness", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=report" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "report", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=routeType" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "routeType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeBudgetInSec" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "timeBudgetInSec", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=traffic" }),
        __metadata("design:type", Boolean)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "traffic", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=travelMode" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "travelMode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uphillEfficiency" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "uphillEfficiency", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=vehicleAxleWeight" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleAxleWeight", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=vehicleCommercial" }),
        __metadata("design:type", Boolean)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleCommercial", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=vehicleEngineType" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleEngineType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=vehicleHeight" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleHeight", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=vehicleLength" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleLength", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=vehicleLoadType" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleLoadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=vehicleMaxSpeed" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleMaxSpeed", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=vehicleWeight" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleWeight", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=vehicleWidth" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleWidth", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=windingness" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "windingness", void 0);
    return GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams;
}(SpeakeasyBase));
export { GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams };
var GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest = /** @class */ (function (_super) {
    __extends(GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest, _super);
    function GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest.prototype, "queryParams", void 0);
    return GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest;
}(SpeakeasyBase));
export { GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest };
var GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse = /** @class */ (function (_super) {
    __extends(GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse, _super);
    function GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse.prototype, "statusCode", void 0);
    return GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse;
}(SpeakeasyBase));
export { GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse };
