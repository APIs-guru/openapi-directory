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
var PlaceGetAtPathParams = /** @class */ (function (_super) {
    __extends(PlaceGetAtPathParams, _super);
    function PlaceGetAtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Lat" }),
        __metadata("design:type", String)
    ], PlaceGetAtPathParams.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Lon" }),
        __metadata("design:type", String)
    ], PlaceGetAtPathParams.prototype, "lon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", Array)
    ], PlaceGetAtPathParams.prototype, "type", void 0);
    return PlaceGetAtPathParams;
}(SpeakeasyBase));
export { PlaceGetAtPathParams };
var PlaceGetAtQueryParams = /** @class */ (function (_super) {
    __extends(PlaceGetAtQueryParams, _super);
    function PlaceGetAtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", String)
    ], PlaceGetAtQueryParams.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location.lat" }),
        __metadata("design:type", Number)
    ], PlaceGetAtQueryParams.prototype, "locationLat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location.lon" }),
        __metadata("design:type", Number)
    ], PlaceGetAtQueryParams.prototype, "locationLon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" }),
        __metadata("design:type", String)
    ], PlaceGetAtQueryParams.prototype, "lon", void 0);
    return PlaceGetAtQueryParams;
}(SpeakeasyBase));
export { PlaceGetAtQueryParams };
var PlaceGetAtRequest = /** @class */ (function (_super) {
    __extends(PlaceGetAtRequest, _super);
    function PlaceGetAtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaceGetAtPathParams)
    ], PlaceGetAtRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaceGetAtQueryParams)
    ], PlaceGetAtRequest.prototype, "queryParams", void 0);
    return PlaceGetAtRequest;
}(SpeakeasyBase));
export { PlaceGetAtRequest };
var PlaceGetAtResponse = /** @class */ (function (_super) {
    __extends(PlaceGetAtResponse, _super);
    function PlaceGetAtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PlaceGetAtResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlaceGetAtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlaceGetAtResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PlaceGetAtResponse.prototype, "systemObject", void 0);
    return PlaceGetAtResponse;
}(SpeakeasyBase));
export { PlaceGetAtResponse };
