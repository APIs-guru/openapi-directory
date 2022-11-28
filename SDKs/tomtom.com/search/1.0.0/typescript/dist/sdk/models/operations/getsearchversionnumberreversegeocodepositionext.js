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
var GetSearchVersionNumberReverseGeocodePositionExtPathParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberReverseGeocodePositionExtPathParams, _super);
    function GetSearchVersionNumberReverseGeocodePositionExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberReverseGeocodePositionExtPathParams.prototype, "ext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=position" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberReverseGeocodePositionExtPathParams.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberReverseGeocodePositionExtPathParams.prototype, "versionNumber", void 0);
    return GetSearchVersionNumberReverseGeocodePositionExtPathParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberReverseGeocodePositionExtPathParams };
var GetSearchVersionNumberReverseGeocodePositionExtQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberReverseGeocodePositionExtQueryParams, _super);
    function GetSearchVersionNumberReverseGeocodePositionExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=heading" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "heading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnRoadUse" }),
        __metadata("design:type", Boolean)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "returnRoadUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnSpeedLimit" }),
        __metadata("design:type", Boolean)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "returnSpeedLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roadUse" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "roadUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spatialKeys" }),
        __metadata("design:type", Boolean)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "spatialKeys", void 0);
    return GetSearchVersionNumberReverseGeocodePositionExtQueryParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberReverseGeocodePositionExtQueryParams };
var GetSearchVersionNumberReverseGeocodePositionExtRequest = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberReverseGeocodePositionExtRequest, _super);
    function GetSearchVersionNumberReverseGeocodePositionExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberReverseGeocodePositionExtPathParams)
    ], GetSearchVersionNumberReverseGeocodePositionExtRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberReverseGeocodePositionExtQueryParams)
    ], GetSearchVersionNumberReverseGeocodePositionExtRequest.prototype, "queryParams", void 0);
    return GetSearchVersionNumberReverseGeocodePositionExtRequest;
}(SpeakeasyBase));
export { GetSearchVersionNumberReverseGeocodePositionExtRequest };
var GetSearchVersionNumberReverseGeocodePositionExtResponse = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberReverseGeocodePositionExtResponse, _super);
    function GetSearchVersionNumberReverseGeocodePositionExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchVersionNumberReverseGeocodePositionExtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberReverseGeocodePositionExtResponse.prototype, "statusCode", void 0);
    return GetSearchVersionNumberReverseGeocodePositionExtResponse;
}(SpeakeasyBase));
export { GetSearchVersionNumberReverseGeocodePositionExtResponse };
