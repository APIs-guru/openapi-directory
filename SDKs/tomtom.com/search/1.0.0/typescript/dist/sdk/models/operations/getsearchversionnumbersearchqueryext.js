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
var GetSearchVersionNumberSearchQueryExtPathParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberSearchQueryExtPathParams, _super);
    function GetSearchVersionNumberSearchQueryExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberSearchQueryExtPathParams.prototype, "ext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberSearchQueryExtPathParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberSearchQueryExtPathParams.prototype, "versionNumber", void 0);
    return GetSearchVersionNumberSearchQueryExtPathParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberSearchQueryExtPathParams };
var GetSearchVersionNumberSearchQueryExtQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberSearchQueryExtQueryParams, _super);
    function GetSearchVersionNumberSearchQueryExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=btmRight" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "btmRight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countrySet" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "countrySet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "extendedPostalCodesFor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idxSet" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "idxSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "lon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxFuzzyLevel" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "maxFuzzyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minFuzzyLevel" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "minFuzzyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ofs" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "ofs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topLeft" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "topLeft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=typeahead" }),
        __metadata("design:type", Boolean)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "typeahead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberSearchQueryExtQueryParams.prototype, "view", void 0);
    return GetSearchVersionNumberSearchQueryExtQueryParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberSearchQueryExtQueryParams };
var GetSearchVersionNumberSearchQueryExtRequest = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberSearchQueryExtRequest, _super);
    function GetSearchVersionNumberSearchQueryExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberSearchQueryExtPathParams)
    ], GetSearchVersionNumberSearchQueryExtRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberSearchQueryExtQueryParams)
    ], GetSearchVersionNumberSearchQueryExtRequest.prototype, "queryParams", void 0);
    return GetSearchVersionNumberSearchQueryExtRequest;
}(SpeakeasyBase));
export { GetSearchVersionNumberSearchQueryExtRequest };
var GetSearchVersionNumberSearchQueryExtResponse = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberSearchQueryExtResponse, _super);
    function GetSearchVersionNumberSearchQueryExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchVersionNumberSearchQueryExtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberSearchQueryExtResponse.prototype, "statusCode", void 0);
    return GetSearchVersionNumberSearchQueryExtResponse;
}(SpeakeasyBase));
export { GetSearchVersionNumberSearchQueryExtResponse };
