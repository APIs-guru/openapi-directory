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
var GetSearchVersionNumberGeocodeQueryExtPathParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberGeocodeQueryExtPathParams, _super);
    function GetSearchVersionNumberGeocodeQueryExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeocodeQueryExtPathParams.prototype, "ext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeocodeQueryExtPathParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberGeocodeQueryExtPathParams.prototype, "versionNumber", void 0);
    return GetSearchVersionNumberGeocodeQueryExtPathParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberGeocodeQueryExtPathParams };
var GetSearchVersionNumberGeocodeQueryExtQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberGeocodeQueryExtQueryParams, _super);
    function GetSearchVersionNumberGeocodeQueryExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=btmRight" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeocodeQueryExtQueryParams.prototype, "btmRight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countrySet" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeocodeQueryExtQueryParams.prototype, "countrySet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeocodeQueryExtQueryParams.prototype, "extendedPostalCodesFor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeocodeQueryExtQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberGeocodeQueryExtQueryParams.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberGeocodeQueryExtQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberGeocodeQueryExtQueryParams.prototype, "lon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ofs" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberGeocodeQueryExtQueryParams.prototype, "ofs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberGeocodeQueryExtQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=storeResult" }),
        __metadata("design:type", Boolean)
    ], GetSearchVersionNumberGeocodeQueryExtQueryParams.prototype, "storeResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topLeft" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeocodeQueryExtQueryParams.prototype, "topLeft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=typeahead" }),
        __metadata("design:type", Boolean)
    ], GetSearchVersionNumberGeocodeQueryExtQueryParams.prototype, "typeahead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeocodeQueryExtQueryParams.prototype, "view", void 0);
    return GetSearchVersionNumberGeocodeQueryExtQueryParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberGeocodeQueryExtQueryParams };
var GetSearchVersionNumberGeocodeQueryExtRequest = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberGeocodeQueryExtRequest, _super);
    function GetSearchVersionNumberGeocodeQueryExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberGeocodeQueryExtPathParams)
    ], GetSearchVersionNumberGeocodeQueryExtRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberGeocodeQueryExtQueryParams)
    ], GetSearchVersionNumberGeocodeQueryExtRequest.prototype, "queryParams", void 0);
    return GetSearchVersionNumberGeocodeQueryExtRequest;
}(SpeakeasyBase));
export { GetSearchVersionNumberGeocodeQueryExtRequest };
var GetSearchVersionNumberGeocodeQueryExtResponse = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberGeocodeQueryExtResponse, _super);
    function GetSearchVersionNumberGeocodeQueryExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeocodeQueryExtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberGeocodeQueryExtResponse.prototype, "statusCode", void 0);
    return GetSearchVersionNumberGeocodeQueryExtResponse;
}(SpeakeasyBase));
export { GetSearchVersionNumberGeocodeQueryExtResponse };
