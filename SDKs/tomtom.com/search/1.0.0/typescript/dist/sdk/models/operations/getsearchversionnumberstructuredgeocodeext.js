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
var GetSearchVersionNumberStructuredGeocodeExtPathParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberStructuredGeocodeExtPathParams, _super);
    function GetSearchVersionNumberStructuredGeocodeExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtPathParams.prototype, "ext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberStructuredGeocodeExtPathParams.prototype, "versionNumber", void 0);
    return GetSearchVersionNumberStructuredGeocodeExtPathParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberStructuredGeocodeExtPathParams };
var GetSearchVersionNumberStructuredGeocodeExtQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberStructuredGeocodeExtQueryParams, _super);
    function GetSearchVersionNumberStructuredGeocodeExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countryCode" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countrySecondarySubdivision" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "countrySecondarySubdivision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countrySubdivision" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "countrySubdivision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countryTertiarySubdivision" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "countryTertiarySubdivision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=crossStreet" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "crossStreet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "extendedPostalCodesFor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=municipality" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "municipality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=municipalitySubdivision" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "municipalitySubdivision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ofs" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "ofs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=postalCode" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streetName" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "streetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streetNumber" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtQueryParams.prototype, "streetNumber", void 0);
    return GetSearchVersionNumberStructuredGeocodeExtQueryParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberStructuredGeocodeExtQueryParams };
var GetSearchVersionNumberStructuredGeocodeExtRequest = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberStructuredGeocodeExtRequest, _super);
    function GetSearchVersionNumberStructuredGeocodeExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberStructuredGeocodeExtPathParams)
    ], GetSearchVersionNumberStructuredGeocodeExtRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberStructuredGeocodeExtQueryParams)
    ], GetSearchVersionNumberStructuredGeocodeExtRequest.prototype, "queryParams", void 0);
    return GetSearchVersionNumberStructuredGeocodeExtRequest;
}(SpeakeasyBase));
export { GetSearchVersionNumberStructuredGeocodeExtRequest };
var GetSearchVersionNumberStructuredGeocodeExtResponse = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberStructuredGeocodeExtResponse, _super);
    function GetSearchVersionNumberStructuredGeocodeExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchVersionNumberStructuredGeocodeExtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberStructuredGeocodeExtResponse.prototype, "statusCode", void 0);
    return GetSearchVersionNumberStructuredGeocodeExtResponse;
}(SpeakeasyBase));
export { GetSearchVersionNumberStructuredGeocodeExtResponse };
