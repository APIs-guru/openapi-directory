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
var PlaceGetOverlayPathParams = /** @class */ (function (_super) {
    __extends(PlaceGetOverlayPathParams, _super);
    function PlaceGetOverlayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Lat" }),
        __metadata("design:type", String)
    ], PlaceGetOverlayPathParams.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Lon" }),
        __metadata("design:type", String)
    ], PlaceGetOverlayPathParams.prototype, "lon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=height" }),
        __metadata("design:type", Number)
    ], PlaceGetOverlayPathParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", Array)
    ], PlaceGetOverlayPathParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=width" }),
        __metadata("design:type", Number)
    ], PlaceGetOverlayPathParams.prototype, "width", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=z" }),
        __metadata("design:type", Number)
    ], PlaceGetOverlayPathParams.prototype, "z", void 0);
    return PlaceGetOverlayPathParams;
}(SpeakeasyBase));
export { PlaceGetOverlayPathParams };
var PlaceGetOverlayQueryParams = /** @class */ (function (_super) {
    __extends(PlaceGetOverlayQueryParams, _super);
    function PlaceGetOverlayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", String)
    ], PlaceGetOverlayQueryParams.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location.lat" }),
        __metadata("design:type", Number)
    ], PlaceGetOverlayQueryParams.prototype, "locationLat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location.lon" }),
        __metadata("design:type", Number)
    ], PlaceGetOverlayQueryParams.prototype, "locationLon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" }),
        __metadata("design:type", String)
    ], PlaceGetOverlayQueryParams.prototype, "lon", void 0);
    return PlaceGetOverlayQueryParams;
}(SpeakeasyBase));
export { PlaceGetOverlayQueryParams };
var PlaceGetOverlayRequest = /** @class */ (function (_super) {
    __extends(PlaceGetOverlayRequest, _super);
    function PlaceGetOverlayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaceGetOverlayPathParams)
    ], PlaceGetOverlayRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaceGetOverlayQueryParams)
    ], PlaceGetOverlayRequest.prototype, "queryParams", void 0);
    return PlaceGetOverlayRequest;
}(SpeakeasyBase));
export { PlaceGetOverlayRequest };
var PlaceGetOverlayResponse = /** @class */ (function (_super) {
    __extends(PlaceGetOverlayResponse, _super);
    function PlaceGetOverlayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PlaceGetOverlayResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlaceGetOverlayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlaceGetOverlayResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PlaceGetOverlayResponse.prototype, "systemObject", void 0);
    return PlaceGetOverlayResponse;
}(SpeakeasyBase));
export { PlaceGetOverlayResponse };
