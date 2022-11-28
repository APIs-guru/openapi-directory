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
var GetApiSpecificationQueryParams = /** @class */ (function (_super) {
    __extends(GetApiSpecificationQueryParams, _super);
    function GetApiSpecificationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetApiSpecificationQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetApiSpecificationQueryParams.prototype, "perPage", void 0);
    return GetApiSpecificationQueryParams;
}(SpeakeasyBase));
export { GetApiSpecificationQueryParams };
var GetApiSpecificationHeaders = /** @class */ (function (_super) {
    __extends(GetApiSpecificationHeaders, _super);
    function GetApiSpecificationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-readme-version" }),
        __metadata("design:type", String)
    ], GetApiSpecificationHeaders.prototype, "xReadmeVersion", void 0);
    return GetApiSpecificationHeaders;
}(SpeakeasyBase));
export { GetApiSpecificationHeaders };
var GetApiSpecificationSecurity = /** @class */ (function (_super) {
    __extends(GetApiSpecificationSecurity, _super);
    function GetApiSpecificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetApiSpecificationSecurity.prototype, "apiKey", void 0);
    return GetApiSpecificationSecurity;
}(SpeakeasyBase));
export { GetApiSpecificationSecurity };
var GetApiSpecificationRequest = /** @class */ (function (_super) {
    __extends(GetApiSpecificationRequest, _super);
    function GetApiSpecificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiSpecificationQueryParams)
    ], GetApiSpecificationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiSpecificationHeaders)
    ], GetApiSpecificationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiSpecificationSecurity)
    ], GetApiSpecificationRequest.prototype, "security", void 0);
    return GetApiSpecificationRequest;
}(SpeakeasyBase));
export { GetApiSpecificationRequest };
var GetApiSpecificationResponse = /** @class */ (function (_super) {
    __extends(GetApiSpecificationResponse, _super);
    function GetApiSpecificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiSpecificationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiSpecificationResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiSpecificationResponse.prototype, "statusCode", void 0);
    return GetApiSpecificationResponse;
}(SpeakeasyBase));
export { GetApiSpecificationResponse };
