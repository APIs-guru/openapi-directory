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
var RunsForRunAndRouteTypePathParams = /** @class */ (function (_super) {
    __extends(RunsForRunAndRouteTypePathParams, _super);
    function RunsForRunAndRouteTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_type" }),
        __metadata("design:type", Number)
    ], RunsForRunAndRouteTypePathParams.prototype, "routeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_ref" }),
        __metadata("design:type", String)
    ], RunsForRunAndRouteTypePathParams.prototype, "runRef", void 0);
    return RunsForRunAndRouteTypePathParams;
}(SpeakeasyBase));
export { RunsForRunAndRouteTypePathParams };
export var RunsForRunAndRouteTypeExpandEnum;
(function (RunsForRunAndRouteTypeExpandEnum) {
    RunsForRunAndRouteTypeExpandEnum["All"] = "All";
    RunsForRunAndRouteTypeExpandEnum["VehicleDescriptor"] = "VehicleDescriptor";
    RunsForRunAndRouteTypeExpandEnum["VehiclePosition"] = "VehiclePosition";
    RunsForRunAndRouteTypeExpandEnum["None"] = "None";
})(RunsForRunAndRouteTypeExpandEnum || (RunsForRunAndRouteTypeExpandEnum = {}));
var RunsForRunAndRouteTypeQueryParams = /** @class */ (function (_super) {
    __extends(RunsForRunAndRouteTypeQueryParams, _super);
    function RunsForRunAndRouteTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_utc" }),
        __metadata("design:type", Date)
    ], RunsForRunAndRouteTypeQueryParams.prototype, "dateUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], RunsForRunAndRouteTypeQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], RunsForRunAndRouteTypeQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_geopath" }),
        __metadata("design:type", Boolean)
    ], RunsForRunAndRouteTypeQueryParams.prototype, "includeGeopath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], RunsForRunAndRouteTypeQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], RunsForRunAndRouteTypeQueryParams.prototype, "token", void 0);
    return RunsForRunAndRouteTypeQueryParams;
}(SpeakeasyBase));
export { RunsForRunAndRouteTypeQueryParams };
var RunsForRunAndRouteTypeRequest = /** @class */ (function (_super) {
    __extends(RunsForRunAndRouteTypeRequest, _super);
    function RunsForRunAndRouteTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunsForRunAndRouteTypePathParams)
    ], RunsForRunAndRouteTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunsForRunAndRouteTypeQueryParams)
    ], RunsForRunAndRouteTypeRequest.prototype, "queryParams", void 0);
    return RunsForRunAndRouteTypeRequest;
}(SpeakeasyBase));
export { RunsForRunAndRouteTypeRequest };
var RunsForRunAndRouteTypeResponse = /** @class */ (function (_super) {
    __extends(RunsForRunAndRouteTypeResponse, _super);
    function RunsForRunAndRouteTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RunsForRunAndRouteTypeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunsForRunAndRouteTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunsForRunAndRouteTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], RunsForRunAndRouteTypeResponse.prototype, "v3ErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3RunResponse)
    ], RunsForRunAndRouteTypeResponse.prototype, "v3RunResponse", void 0);
    return RunsForRunAndRouteTypeResponse;
}(SpeakeasyBase));
export { RunsForRunAndRouteTypeResponse };
