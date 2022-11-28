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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var DeparturesGetForStopAndRoutePathParams = /** @class */ (function (_super) {
    __extends(DeparturesGetForStopAndRoutePathParams, _super);
    function DeparturesGetForStopAndRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_id" }),
        __metadata("design:type", String)
    ], DeparturesGetForStopAndRoutePathParams.prototype, "routeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_type" }),
        __metadata("design:type", Number)
    ], DeparturesGetForStopAndRoutePathParams.prototype, "routeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stop_id" }),
        __metadata("design:type", Number)
    ], DeparturesGetForStopAndRoutePathParams.prototype, "stopId", void 0);
    return DeparturesGetForStopAndRoutePathParams;
}(SpeakeasyBase));
export { DeparturesGetForStopAndRoutePathParams };
export var DeparturesGetForStopAndRouteExpandEnum;
(function (DeparturesGetForStopAndRouteExpandEnum) {
    DeparturesGetForStopAndRouteExpandEnum["All"] = "All";
    DeparturesGetForStopAndRouteExpandEnum["Stop"] = "Stop";
    DeparturesGetForStopAndRouteExpandEnum["Route"] = "Route";
    DeparturesGetForStopAndRouteExpandEnum["Run"] = "Run";
    DeparturesGetForStopAndRouteExpandEnum["Direction"] = "Direction";
    DeparturesGetForStopAndRouteExpandEnum["Disruption"] = "Disruption";
    DeparturesGetForStopAndRouteExpandEnum["VehicleDescriptor"] = "VehicleDescriptor";
    DeparturesGetForStopAndRouteExpandEnum["VehiclePosition"] = "VehiclePosition";
    DeparturesGetForStopAndRouteExpandEnum["None"] = "None";
})(DeparturesGetForStopAndRouteExpandEnum || (DeparturesGetForStopAndRouteExpandEnum = {}));
var DeparturesGetForStopAndRouteQueryParams = /** @class */ (function (_super) {
    __extends(DeparturesGetForStopAndRouteQueryParams, _super);
    function DeparturesGetForStopAndRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_utc" }),
        __metadata("design:type", Date)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "dateUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction_id" }),
        __metadata("design:type", Number)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "directionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gtfs" }),
        __metadata("design:type", Boolean)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "gtfs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_cancelled" }),
        __metadata("design:type", Boolean)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "includeCancelled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_geopath" }),
        __metadata("design:type", Boolean)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "includeGeopath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=look_backwards" }),
        __metadata("design:type", Boolean)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "lookBackwards", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_results" }),
        __metadata("design:type", Number)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "token", void 0);
    return DeparturesGetForStopAndRouteQueryParams;
}(SpeakeasyBase));
export { DeparturesGetForStopAndRouteQueryParams };
var DeparturesGetForStopAndRouteRequest = /** @class */ (function (_super) {
    __extends(DeparturesGetForStopAndRouteRequest, _super);
    function DeparturesGetForStopAndRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeparturesGetForStopAndRoutePathParams)
    ], DeparturesGetForStopAndRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeparturesGetForStopAndRouteQueryParams)
    ], DeparturesGetForStopAndRouteRequest.prototype, "queryParams", void 0);
    return DeparturesGetForStopAndRouteRequest;
}(SpeakeasyBase));
export { DeparturesGetForStopAndRouteRequest };
var DeparturesGetForStopAndRouteResponse = /** @class */ (function (_super) {
    __extends(DeparturesGetForStopAndRouteResponse, _super);
    function DeparturesGetForStopAndRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DeparturesGetForStopAndRouteResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeparturesGetForStopAndRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeparturesGetForStopAndRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3DeparturesResponse)
    ], DeparturesGetForStopAndRouteResponse.prototype, "v3DeparturesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], DeparturesGetForStopAndRouteResponse.prototype, "v3ErrorResponse", void 0);
    return DeparturesGetForStopAndRouteResponse;
}(SpeakeasyBase));
export { DeparturesGetForStopAndRouteResponse };
