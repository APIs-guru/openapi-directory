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
var GetSearchVersionNumberCategorySearchQueryExtPathParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberCategorySearchQueryExtPathParams, _super);
    function GetSearchVersionNumberCategorySearchQueryExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCategorySearchQueryExtPathParams.prototype, "ext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCategorySearchQueryExtPathParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCategorySearchQueryExtPathParams.prototype, "versionNumber", void 0);
    return GetSearchVersionNumberCategorySearchQueryExtPathParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberCategorySearchQueryExtPathParams };
var GetSearchVersionNumberCategorySearchQueryExtQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberCategorySearchQueryExtQueryParams, _super);
    function GetSearchVersionNumberCategorySearchQueryExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=btmRight" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCategorySearchQueryExtQueryParams.prototype, "btmRight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countrySet" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCategorySearchQueryExtQueryParams.prototype, "countrySet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCategorySearchQueryExtQueryParams.prototype, "extendedPostalCodesFor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCategorySearchQueryExtQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCategorySearchQueryExtQueryParams.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCategorySearchQueryExtQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCategorySearchQueryExtQueryParams.prototype, "lon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ofs" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCategorySearchQueryExtQueryParams.prototype, "ofs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCategorySearchQueryExtQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topLeft" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCategorySearchQueryExtQueryParams.prototype, "topLeft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=typeahead" }),
        __metadata("design:type", Boolean)
    ], GetSearchVersionNumberCategorySearchQueryExtQueryParams.prototype, "typeahead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCategorySearchQueryExtQueryParams.prototype, "view", void 0);
    return GetSearchVersionNumberCategorySearchQueryExtQueryParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberCategorySearchQueryExtQueryParams };
var GetSearchVersionNumberCategorySearchQueryExtRequest = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberCategorySearchQueryExtRequest, _super);
    function GetSearchVersionNumberCategorySearchQueryExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberCategorySearchQueryExtPathParams)
    ], GetSearchVersionNumberCategorySearchQueryExtRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberCategorySearchQueryExtQueryParams)
    ], GetSearchVersionNumberCategorySearchQueryExtRequest.prototype, "queryParams", void 0);
    return GetSearchVersionNumberCategorySearchQueryExtRequest;
}(SpeakeasyBase));
export { GetSearchVersionNumberCategorySearchQueryExtRequest };
var GetSearchVersionNumberCategorySearchQueryExtResponse = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberCategorySearchQueryExtResponse, _super);
    function GetSearchVersionNumberCategorySearchQueryExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCategorySearchQueryExtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCategorySearchQueryExtResponse.prototype, "statusCode", void 0);
    return GetSearchVersionNumberCategorySearchQueryExtResponse;
}(SpeakeasyBase));
export { GetSearchVersionNumberCategorySearchQueryExtResponse };
