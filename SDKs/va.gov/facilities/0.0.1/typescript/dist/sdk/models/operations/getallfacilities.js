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
export var GetAllFacilitiesAcceptEnum;
(function (GetAllFacilitiesAcceptEnum) {
    GetAllFacilitiesAcceptEnum["ApplicationGeoPlusJson"] = "application/geo+json";
    GetAllFacilitiesAcceptEnum["ApplicationVndGeoPlusJson"] = "application/vnd.geo+json";
    GetAllFacilitiesAcceptEnum["TextCsv"] = "text/csv";
})(GetAllFacilitiesAcceptEnum || (GetAllFacilitiesAcceptEnum = {}));
var GetAllFacilitiesHeaders = /** @class */ (function (_super) {
    __extends(GetAllFacilitiesHeaders, _super);
    function GetAllFacilitiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetAllFacilitiesHeaders.prototype, "accept", void 0);
    return GetAllFacilitiesHeaders;
}(SpeakeasyBase));
export { GetAllFacilitiesHeaders };
var GetAllFacilitiesSecurity = /** @class */ (function (_super) {
    __extends(GetAllFacilitiesSecurity, _super);
    function GetAllFacilitiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], GetAllFacilitiesSecurity.prototype, "apikey", void 0);
    return GetAllFacilitiesSecurity;
}(SpeakeasyBase));
export { GetAllFacilitiesSecurity };
var GetAllFacilitiesRequest = /** @class */ (function (_super) {
    __extends(GetAllFacilitiesRequest, _super);
    function GetAllFacilitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllFacilitiesHeaders)
    ], GetAllFacilitiesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllFacilitiesSecurity)
    ], GetAllFacilitiesRequest.prototype, "security", void 0);
    return GetAllFacilitiesRequest;
}(SpeakeasyBase));
export { GetAllFacilitiesRequest };
var GetAllFacilitiesResponse = /** @class */ (function (_super) {
    __extends(GetAllFacilitiesResponse, _super);
    function GetAllFacilitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetAllFacilitiesResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllFacilitiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenericError)
    ], GetAllFacilitiesResponse.prototype, "genericError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GeoFacilitiesResponse)
    ], GetAllFacilitiesResponse.prototype, "geoFacilitiesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllFacilitiesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllFacilitiesResponse.prototype, "getAllFacilities200TextCsvString", void 0);
    return GetAllFacilitiesResponse;
}(SpeakeasyBase));
export { GetAllFacilitiesResponse };
