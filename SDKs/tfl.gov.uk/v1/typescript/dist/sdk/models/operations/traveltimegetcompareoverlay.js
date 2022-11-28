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
var TravelTimeGetCompareOverlayPathParams = /** @class */ (function (_super) {
    __extends(TravelTimeGetCompareOverlayPathParams, _super);
    function TravelTimeGetCompareOverlayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=height" }),
        __metadata("design:type", Number)
    ], TravelTimeGetCompareOverlayPathParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mapCenterLat" }),
        __metadata("design:type", Number)
    ], TravelTimeGetCompareOverlayPathParams.prototype, "mapCenterLat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mapCenterLon" }),
        __metadata("design:type", Number)
    ], TravelTimeGetCompareOverlayPathParams.prototype, "mapCenterLon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pinLat" }),
        __metadata("design:type", Number)
    ], TravelTimeGetCompareOverlayPathParams.prototype, "pinLat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pinLon" }),
        __metadata("design:type", Number)
    ], TravelTimeGetCompareOverlayPathParams.prototype, "pinLon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=width" }),
        __metadata("design:type", Number)
    ], TravelTimeGetCompareOverlayPathParams.prototype, "width", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=z" }),
        __metadata("design:type", Number)
    ], TravelTimeGetCompareOverlayPathParams.prototype, "z", void 0);
    return TravelTimeGetCompareOverlayPathParams;
}(SpeakeasyBase));
export { TravelTimeGetCompareOverlayPathParams };
export var TravelTimeGetCompareOverlayDirectionEnum;
(function (TravelTimeGetCompareOverlayDirectionEnum) {
    TravelTimeGetCompareOverlayDirectionEnum["Average"] = "Average";
    TravelTimeGetCompareOverlayDirectionEnum["From"] = "From";
    TravelTimeGetCompareOverlayDirectionEnum["To"] = "To";
})(TravelTimeGetCompareOverlayDirectionEnum || (TravelTimeGetCompareOverlayDirectionEnum = {}));
var TravelTimeGetCompareOverlayQueryParams = /** @class */ (function (_super) {
    __extends(TravelTimeGetCompareOverlayQueryParams, _super);
    function TravelTimeGetCompareOverlayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=compareType" }),
        __metadata("design:type", String)
    ], TravelTimeGetCompareOverlayQueryParams.prototype, "compareType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=compareValue" }),
        __metadata("design:type", String)
    ], TravelTimeGetCompareOverlayQueryParams.prototype, "compareValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], TravelTimeGetCompareOverlayQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modeId" }),
        __metadata("design:type", String)
    ], TravelTimeGetCompareOverlayQueryParams.prototype, "modeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scenarioTitle" }),
        __metadata("design:type", String)
    ], TravelTimeGetCompareOverlayQueryParams.prototype, "scenarioTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeOfDayId" }),
        __metadata("design:type", String)
    ], TravelTimeGetCompareOverlayQueryParams.prototype, "timeOfDayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelTimeInterval" }),
        __metadata("design:type", Number)
    ], TravelTimeGetCompareOverlayQueryParams.prototype, "travelTimeInterval", void 0);
    return TravelTimeGetCompareOverlayQueryParams;
}(SpeakeasyBase));
export { TravelTimeGetCompareOverlayQueryParams };
var TravelTimeGetCompareOverlayRequest = /** @class */ (function (_super) {
    __extends(TravelTimeGetCompareOverlayRequest, _super);
    function TravelTimeGetCompareOverlayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TravelTimeGetCompareOverlayPathParams)
    ], TravelTimeGetCompareOverlayRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TravelTimeGetCompareOverlayQueryParams)
    ], TravelTimeGetCompareOverlayRequest.prototype, "queryParams", void 0);
    return TravelTimeGetCompareOverlayRequest;
}(SpeakeasyBase));
export { TravelTimeGetCompareOverlayRequest };
var TravelTimeGetCompareOverlayResponse = /** @class */ (function (_super) {
    __extends(TravelTimeGetCompareOverlayResponse, _super);
    function TravelTimeGetCompareOverlayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TravelTimeGetCompareOverlayResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TravelTimeGetCompareOverlayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TravelTimeGetCompareOverlayResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TravelTimeGetCompareOverlayResponse.prototype, "systemObject", void 0);
    return TravelTimeGetCompareOverlayResponse;
}(SpeakeasyBase));
export { TravelTimeGetCompareOverlayResponse };
