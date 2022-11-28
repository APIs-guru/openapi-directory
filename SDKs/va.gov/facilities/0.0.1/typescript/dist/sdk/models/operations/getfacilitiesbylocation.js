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
export var GetFacilitiesByLocationTypeEnum;
(function (GetFacilitiesByLocationTypeEnum) {
    GetFacilitiesByLocationTypeEnum["Health"] = "health";
    GetFacilitiesByLocationTypeEnum["Cemetery"] = "cemetery";
    GetFacilitiesByLocationTypeEnum["Benefits"] = "benefits";
    GetFacilitiesByLocationTypeEnum["VetCenter"] = "vet_center";
})(GetFacilitiesByLocationTypeEnum || (GetFacilitiesByLocationTypeEnum = {}));
var GetFacilitiesByLocationQueryParams = /** @class */ (function (_super) {
    __extends(GetFacilitiesByLocationQueryParams, _super);
    function GetFacilitiesByLocationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox[]" }),
        __metadata("design:type", Array)
    ], GetFacilitiesByLocationQueryParams.prototype, "bbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], GetFacilitiesByLocationQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", Number)
    ], GetFacilitiesByLocationQueryParams.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=long" }),
        __metadata("design:type", Number)
    ], GetFacilitiesByLocationQueryParams.prototype, "long", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mobile" }),
        __metadata("design:type", Boolean)
    ], GetFacilitiesByLocationQueryParams.prototype, "mobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetFacilitiesByLocationQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetFacilitiesByLocationQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=services[]" }),
        __metadata("design:type", Array)
    ], GetFacilitiesByLocationQueryParams.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetFacilitiesByLocationQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetFacilitiesByLocationQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=visn" }),
        __metadata("design:type", Number)
    ], GetFacilitiesByLocationQueryParams.prototype, "visn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], GetFacilitiesByLocationQueryParams.prototype, "zip", void 0);
    return GetFacilitiesByLocationQueryParams;
}(SpeakeasyBase));
export { GetFacilitiesByLocationQueryParams };
var GetFacilitiesByLocationSecurity = /** @class */ (function (_super) {
    __extends(GetFacilitiesByLocationSecurity, _super);
    function GetFacilitiesByLocationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], GetFacilitiesByLocationSecurity.prototype, "apikey", void 0);
    return GetFacilitiesByLocationSecurity;
}(SpeakeasyBase));
export { GetFacilitiesByLocationSecurity };
var GetFacilitiesByLocationRequest = /** @class */ (function (_super) {
    __extends(GetFacilitiesByLocationRequest, _super);
    function GetFacilitiesByLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFacilitiesByLocationQueryParams)
    ], GetFacilitiesByLocationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFacilitiesByLocationSecurity)
    ], GetFacilitiesByLocationRequest.prototype, "security", void 0);
    return GetFacilitiesByLocationRequest;
}(SpeakeasyBase));
export { GetFacilitiesByLocationRequest };
var GetFacilitiesByLocationResponse = /** @class */ (function (_super) {
    __extends(GetFacilitiesByLocationResponse, _super);
    function GetFacilitiesByLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetFacilitiesByLocationResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFacilitiesByLocationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FacilitiesResponse)
    ], GetFacilitiesByLocationResponse.prototype, "facilitiesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenericError)
    ], GetFacilitiesByLocationResponse.prototype, "genericError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GeoFacilitiesResponse)
    ], GetFacilitiesByLocationResponse.prototype, "geoFacilitiesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFacilitiesByLocationResponse.prototype, "statusCode", void 0);
    return GetFacilitiesByLocationResponse;
}(SpeakeasyBase));
export { GetFacilitiesByLocationResponse };
