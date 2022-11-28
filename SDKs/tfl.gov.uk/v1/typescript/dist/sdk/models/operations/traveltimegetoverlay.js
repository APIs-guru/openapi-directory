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
var TravelTimeGetOverlayPathParams = /** @class */ (function (_super) {
    __extends(TravelTimeGetOverlayPathParams, _super);
    function TravelTimeGetOverlayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=height" }),
        __metadata("design:type", Number)
    ], TravelTimeGetOverlayPathParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mapCenterLat" }),
        __metadata("design:type", Number)
    ], TravelTimeGetOverlayPathParams.prototype, "mapCenterLat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mapCenterLon" }),
        __metadata("design:type", Number)
    ], TravelTimeGetOverlayPathParams.prototype, "mapCenterLon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pinLat" }),
        __metadata("design:type", Number)
    ], TravelTimeGetOverlayPathParams.prototype, "pinLat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pinLon" }),
        __metadata("design:type", Number)
    ], TravelTimeGetOverlayPathParams.prototype, "pinLon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=width" }),
        __metadata("design:type", Number)
    ], TravelTimeGetOverlayPathParams.prototype, "width", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=z" }),
        __metadata("design:type", Number)
    ], TravelTimeGetOverlayPathParams.prototype, "z", void 0);
    return TravelTimeGetOverlayPathParams;
}(SpeakeasyBase));
export { TravelTimeGetOverlayPathParams };
export var TravelTimeGetOverlayDirectionEnum;
(function (TravelTimeGetOverlayDirectionEnum) {
    TravelTimeGetOverlayDirectionEnum["Average"] = "Average";
    TravelTimeGetOverlayDirectionEnum["From"] = "From";
    TravelTimeGetOverlayDirectionEnum["To"] = "To";
})(TravelTimeGetOverlayDirectionEnum || (TravelTimeGetOverlayDirectionEnum = {}));
var TravelTimeGetOverlayQueryParams = /** @class */ (function (_super) {
    __extends(TravelTimeGetOverlayQueryParams, _super);
    function TravelTimeGetOverlayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], TravelTimeGetOverlayQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modeId" }),
        __metadata("design:type", String)
    ], TravelTimeGetOverlayQueryParams.prototype, "modeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scenarioTitle" }),
        __metadata("design:type", String)
    ], TravelTimeGetOverlayQueryParams.prototype, "scenarioTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeOfDayId" }),
        __metadata("design:type", String)
    ], TravelTimeGetOverlayQueryParams.prototype, "timeOfDayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelTimeInterval" }),
        __metadata("design:type", Number)
    ], TravelTimeGetOverlayQueryParams.prototype, "travelTimeInterval", void 0);
    return TravelTimeGetOverlayQueryParams;
}(SpeakeasyBase));
export { TravelTimeGetOverlayQueryParams };
var TravelTimeGetOverlayRequest = /** @class */ (function (_super) {
    __extends(TravelTimeGetOverlayRequest, _super);
    function TravelTimeGetOverlayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TravelTimeGetOverlayPathParams)
    ], TravelTimeGetOverlayRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TravelTimeGetOverlayQueryParams)
    ], TravelTimeGetOverlayRequest.prototype, "queryParams", void 0);
    return TravelTimeGetOverlayRequest;
}(SpeakeasyBase));
export { TravelTimeGetOverlayRequest };
var TravelTimeGetOverlayResponse = /** @class */ (function (_super) {
    __extends(TravelTimeGetOverlayResponse, _super);
    function TravelTimeGetOverlayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TravelTimeGetOverlayResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TravelTimeGetOverlayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TravelTimeGetOverlayResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TravelTimeGetOverlayResponse.prototype, "systemObject", void 0);
    return TravelTimeGetOverlayResponse;
}(SpeakeasyBase));
export { TravelTimeGetOverlayResponse };
