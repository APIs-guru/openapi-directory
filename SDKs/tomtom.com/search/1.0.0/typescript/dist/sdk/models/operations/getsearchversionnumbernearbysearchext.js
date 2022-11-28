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
var GetSearchVersionNumberNearbySearchExtPathParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberNearbySearchExtPathParams, _super);
    function GetSearchVersionNumberNearbySearchExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberNearbySearchExtPathParams.prototype, "ext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberNearbySearchExtPathParams.prototype, "versionNumber", void 0);
    return GetSearchVersionNumberNearbySearchExtPathParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberNearbySearchExtPathParams };
var GetSearchVersionNumberNearbySearchExtQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberNearbySearchExtQueryParams, _super);
    function GetSearchVersionNumberNearbySearchExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=btmRight" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "btmRight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countrySet" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "countrySet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "extendedPostalCodesFor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idxSet" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "idxSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "lon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxFuzzyLevel" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "maxFuzzyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minFuzzyLevel" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "minFuzzyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ofs" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "ofs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topLeft" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "topLeft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberNearbySearchExtQueryParams.prototype, "view", void 0);
    return GetSearchVersionNumberNearbySearchExtQueryParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberNearbySearchExtQueryParams };
var GetSearchVersionNumberNearbySearchExtRequest = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberNearbySearchExtRequest, _super);
    function GetSearchVersionNumberNearbySearchExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberNearbySearchExtPathParams)
    ], GetSearchVersionNumberNearbySearchExtRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberNearbySearchExtQueryParams)
    ], GetSearchVersionNumberNearbySearchExtRequest.prototype, "queryParams", void 0);
    return GetSearchVersionNumberNearbySearchExtRequest;
}(SpeakeasyBase));
export { GetSearchVersionNumberNearbySearchExtRequest };
var GetSearchVersionNumberNearbySearchExtResponse = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberNearbySearchExtResponse, _super);
    function GetSearchVersionNumberNearbySearchExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchVersionNumberNearbySearchExtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberNearbySearchExtResponse.prototype, "statusCode", void 0);
    return GetSearchVersionNumberNearbySearchExtResponse;
}(SpeakeasyBase));
export { GetSearchVersionNumberNearbySearchExtResponse };
