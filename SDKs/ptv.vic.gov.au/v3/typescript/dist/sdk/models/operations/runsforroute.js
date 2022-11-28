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
var RunsForRoutePathParams = /** @class */ (function (_super) {
    __extends(RunsForRoutePathParams, _super);
    function RunsForRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_id" }),
        __metadata("design:type", Number)
    ], RunsForRoutePathParams.prototype, "routeId", void 0);
    return RunsForRoutePathParams;
}(SpeakeasyBase));
export { RunsForRoutePathParams };
export var RunsForRouteExpandEnum;
(function (RunsForRouteExpandEnum) {
    RunsForRouteExpandEnum["All"] = "All";
    RunsForRouteExpandEnum["VehicleDescriptor"] = "VehicleDescriptor";
    RunsForRouteExpandEnum["VehiclePosition"] = "VehiclePosition";
    RunsForRouteExpandEnum["None"] = "None";
})(RunsForRouteExpandEnum || (RunsForRouteExpandEnum = {}));
var RunsForRouteQueryParams = /** @class */ (function (_super) {
    __extends(RunsForRouteQueryParams, _super);
    function RunsForRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_utc" }),
        __metadata("design:type", Date)
    ], RunsForRouteQueryParams.prototype, "dateUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], RunsForRouteQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], RunsForRouteQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], RunsForRouteQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], RunsForRouteQueryParams.prototype, "token", void 0);
    return RunsForRouteQueryParams;
}(SpeakeasyBase));
export { RunsForRouteQueryParams };
var RunsForRouteRequest = /** @class */ (function (_super) {
    __extends(RunsForRouteRequest, _super);
    function RunsForRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunsForRoutePathParams)
    ], RunsForRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunsForRouteQueryParams)
    ], RunsForRouteRequest.prototype, "queryParams", void 0);
    return RunsForRouteRequest;
}(SpeakeasyBase));
export { RunsForRouteRequest };
var RunsForRouteResponse = /** @class */ (function (_super) {
    __extends(RunsForRouteResponse, _super);
    function RunsForRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RunsForRouteResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunsForRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunsForRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], RunsForRouteResponse.prototype, "v3ErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3RunsResponse)
    ], RunsForRouteResponse.prototype, "v3RunsResponse", void 0);
    return RunsForRouteResponse;
}(SpeakeasyBase));
export { RunsForRouteResponse };
