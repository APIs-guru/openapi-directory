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
var PatternsGetPatternByRunPathParams = /** @class */ (function (_super) {
    __extends(PatternsGetPatternByRunPathParams, _super);
    function PatternsGetPatternByRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_type" }),
        __metadata("design:type", Number)
    ], PatternsGetPatternByRunPathParams.prototype, "routeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_ref" }),
        __metadata("design:type", String)
    ], PatternsGetPatternByRunPathParams.prototype, "runRef", void 0);
    return PatternsGetPatternByRunPathParams;
}(SpeakeasyBase));
export { PatternsGetPatternByRunPathParams };
export var PatternsGetPatternByRunExpandEnum;
(function (PatternsGetPatternByRunExpandEnum) {
    PatternsGetPatternByRunExpandEnum["All"] = "All";
    PatternsGetPatternByRunExpandEnum["Stop"] = "Stop";
    PatternsGetPatternByRunExpandEnum["Route"] = "Route";
    PatternsGetPatternByRunExpandEnum["Run"] = "Run";
    PatternsGetPatternByRunExpandEnum["Direction"] = "Direction";
    PatternsGetPatternByRunExpandEnum["Disruption"] = "Disruption";
    PatternsGetPatternByRunExpandEnum["VehicleDescriptor"] = "VehicleDescriptor";
    PatternsGetPatternByRunExpandEnum["VehiclePosition"] = "VehiclePosition";
    PatternsGetPatternByRunExpandEnum["None"] = "None";
})(PatternsGetPatternByRunExpandEnum || (PatternsGetPatternByRunExpandEnum = {}));
var PatternsGetPatternByRunQueryParams = /** @class */ (function (_super) {
    __extends(PatternsGetPatternByRunQueryParams, _super);
    function PatternsGetPatternByRunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_utc" }),
        __metadata("design:type", Date)
    ], PatternsGetPatternByRunQueryParams.prototype, "dateUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], PatternsGetPatternByRunQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], PatternsGetPatternByRunQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_geopath" }),
        __metadata("design:type", Boolean)
    ], PatternsGetPatternByRunQueryParams.prototype, "includeGeopath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_skipped_stops" }),
        __metadata("design:type", Boolean)
    ], PatternsGetPatternByRunQueryParams.prototype, "includeSkippedStops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], PatternsGetPatternByRunQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_id" }),
        __metadata("design:type", Number)
    ], PatternsGetPatternByRunQueryParams.prototype, "stopId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], PatternsGetPatternByRunQueryParams.prototype, "token", void 0);
    return PatternsGetPatternByRunQueryParams;
}(SpeakeasyBase));
export { PatternsGetPatternByRunQueryParams };
var PatternsGetPatternByRunRequest = /** @class */ (function (_super) {
    __extends(PatternsGetPatternByRunRequest, _super);
    function PatternsGetPatternByRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatternsGetPatternByRunPathParams)
    ], PatternsGetPatternByRunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatternsGetPatternByRunQueryParams)
    ], PatternsGetPatternByRunRequest.prototype, "queryParams", void 0);
    return PatternsGetPatternByRunRequest;
}(SpeakeasyBase));
export { PatternsGetPatternByRunRequest };
var PatternsGetPatternByRunResponse = /** @class */ (function (_super) {
    __extends(PatternsGetPatternByRunResponse, _super);
    function PatternsGetPatternByRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PatternsGetPatternByRunResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatternsGetPatternByRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatternsGetPatternByRunResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], PatternsGetPatternByRunResponse.prototype, "v3ErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3StoppingPattern)
    ], PatternsGetPatternByRunResponse.prototype, "v3StoppingPattern", void 0);
    return PatternsGetPatternByRunResponse;
}(SpeakeasyBase));
export { PatternsGetPatternByRunResponse };
