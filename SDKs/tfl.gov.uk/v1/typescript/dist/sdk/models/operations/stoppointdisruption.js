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
var StopPointDisruptionPathParams = /** @class */ (function (_super) {
    __extends(StopPointDisruptionPathParams, _super);
    function StopPointDisruptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], StopPointDisruptionPathParams.prototype, "ids", void 0);
    return StopPointDisruptionPathParams;
}(SpeakeasyBase));
export { StopPointDisruptionPathParams };
var StopPointDisruptionQueryParams = /** @class */ (function (_super) {
    __extends(StopPointDisruptionQueryParams, _super);
    function StopPointDisruptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=flattenResponse" }),
        __metadata("design:type", Boolean)
    ], StopPointDisruptionQueryParams.prototype, "flattenResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getFamily" }),
        __metadata("design:type", Boolean)
    ], StopPointDisruptionQueryParams.prototype, "getFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeRouteBlockedStops" }),
        __metadata("design:type", Boolean)
    ], StopPointDisruptionQueryParams.prototype, "includeRouteBlockedStops", void 0);
    return StopPointDisruptionQueryParams;
}(SpeakeasyBase));
export { StopPointDisruptionQueryParams };
var StopPointDisruptionRequest = /** @class */ (function (_super) {
    __extends(StopPointDisruptionRequest, _super);
    function StopPointDisruptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopPointDisruptionPathParams)
    ], StopPointDisruptionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopPointDisruptionQueryParams)
    ], StopPointDisruptionRequest.prototype, "queryParams", void 0);
    return StopPointDisruptionRequest;
}(SpeakeasyBase));
export { StopPointDisruptionRequest };
var StopPointDisruptionResponse = /** @class */ (function (_super) {
    __extends(StopPointDisruptionResponse, _super);
    function StopPointDisruptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], StopPointDisruptionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopPointDisruptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StopPointDisruptionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesDisruptedPoint }),
        __metadata("design:type", Array)
    ], StopPointDisruptionResponse.prototype, "tflApiPresentationEntitiesDisruptedPoints", void 0);
    return StopPointDisruptionResponse;
}(SpeakeasyBase));
export { StopPointDisruptionResponse };
