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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetAliasesQueryParams = /** @class */ (function (_super) {
    __extends(GetAliasesQueryParams, _super);
    function GetAliasesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=continueFrom" }),
        __metadata("design:type", String)
    ], GetAliasesQueryParams.prototype, "continueFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=domainName" }),
        __metadata("design:type", String)
    ], GetAliasesQueryParams.prototype, "domainName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetAliasesQueryParams.prototype, "limit", void 0);
    return GetAliasesQueryParams;
}(SpeakeasyBase));
export { GetAliasesQueryParams };
var GetAliasesSecurity = /** @class */ (function (_super) {
    __extends(GetAliasesSecurity, _super);
    function GetAliasesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetAliasesSecurity.prototype, "apiKeyAuth", void 0);
    return GetAliasesSecurity;
}(SpeakeasyBase));
export { GetAliasesSecurity };
var GetAliasesRequest = /** @class */ (function (_super) {
    __extends(GetAliasesRequest, _super);
    function GetAliasesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAliasesQueryParams)
    ], GetAliasesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAliasesSecurity)
    ], GetAliasesRequest.prototype, "security", void 0);
    return GetAliasesRequest;
}(SpeakeasyBase));
export { GetAliasesRequest };
var GetAliasesResponse = /** @class */ (function (_super) {
    __extends(GetAliasesResponse, _super);
    function GetAliasesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAliasesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetAliasesModel)
    ], GetAliasesResponse.prototype, "getAliasesModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAliasesResponse.prototype, "statusCode", void 0);
    return GetAliasesResponse;
}(SpeakeasyBase));
export { GetAliasesResponse };
