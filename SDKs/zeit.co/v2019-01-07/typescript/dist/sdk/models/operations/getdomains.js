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
var GetDomainsQueryParams = /** @class */ (function (_super) {
    __extends(GetDomainsQueryParams, _super);
    function GetDomainsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamId" }),
        __metadata("design:type", String)
    ], GetDomainsQueryParams.prototype, "teamId", void 0);
    return GetDomainsQueryParams;
}(SpeakeasyBase));
export { GetDomainsQueryParams };
export var GetDomains200ApplicationJsonDomainsServiceTypeEnum;
(function (GetDomains200ApplicationJsonDomainsServiceTypeEnum) {
    GetDomains200ApplicationJsonDomainsServiceTypeEnum["ZeitWorld"] = "zeit.world";
    GetDomains200ApplicationJsonDomainsServiceTypeEnum["External"] = "external";
    GetDomains200ApplicationJsonDomainsServiceTypeEnum["Na"] = "na";
})(GetDomains200ApplicationJsonDomainsServiceTypeEnum || (GetDomains200ApplicationJsonDomainsServiceTypeEnum = {}));
var GetDomains200ApplicationJsonDomains = /** @class */ (function (_super) {
    __extends(GetDomains200ApplicationJsonDomains, _super);
    function GetDomains200ApplicationJsonDomains() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boughtAt" }),
        __metadata("design:type", Number)
    ], GetDomains200ApplicationJsonDomains.prototype, "boughtAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cdnEnabled" }),
        __metadata("design:type", Boolean)
    ], GetDomains200ApplicationJsonDomains.prototype, "cdnEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Number)
    ], GetDomains200ApplicationJsonDomains.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiresAt" }),
        __metadata("design:type", Number)
    ], GetDomains200ApplicationJsonDomains.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDomains200ApplicationJsonDomains.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intendedNameservers" }),
        __metadata("design:type", Array)
    ], GetDomains200ApplicationJsonDomains.prototype, "intendedNameservers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDomains200ApplicationJsonDomains.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameservers" }),
        __metadata("design:type", Array)
    ], GetDomains200ApplicationJsonDomains.prototype, "nameservers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsVerifiedAt" }),
        __metadata("design:type", Number)
    ], GetDomains200ApplicationJsonDomains.prototype, "nsVerifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderedAt" }),
        __metadata("design:type", Number)
    ], GetDomains200ApplicationJsonDomains.prototype, "orderedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceType" }),
        __metadata("design:type", String)
    ], GetDomains200ApplicationJsonDomains.prototype, "serviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferredAt" }),
        __metadata("design:type", Number)
    ], GetDomains200ApplicationJsonDomains.prototype, "transferredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txtVerifiedAt" }),
        __metadata("design:type", Number)
    ], GetDomains200ApplicationJsonDomains.prototype, "txtVerifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verificationRecord" }),
        __metadata("design:type", String)
    ], GetDomains200ApplicationJsonDomains.prototype, "verificationRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verified" }),
        __metadata("design:type", Boolean)
    ], GetDomains200ApplicationJsonDomains.prototype, "verified", void 0);
    return GetDomains200ApplicationJsonDomains;
}(SpeakeasyBase));
export { GetDomains200ApplicationJsonDomains };
var GetDomains200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDomains200ApplicationJson, _super);
    function GetDomains200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domains", elemType: GetDomains200ApplicationJsonDomains }),
        __metadata("design:type", Array)
    ], GetDomains200ApplicationJson.prototype, "domains", void 0);
    return GetDomains200ApplicationJson;
}(SpeakeasyBase));
export { GetDomains200ApplicationJson };
var GetDomainsRequest = /** @class */ (function (_super) {
    __extends(GetDomainsRequest, _super);
    function GetDomainsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainsQueryParams)
    ], GetDomainsRequest.prototype, "queryParams", void 0);
    return GetDomainsRequest;
}(SpeakeasyBase));
export { GetDomainsRequest };
var GetDomainsResponse = /** @class */ (function (_super) {
    __extends(GetDomainsResponse, _super);
    function GetDomainsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomainsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomainsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomains200ApplicationJson)
    ], GetDomainsResponse.prototype, "getDomains200ApplicationJsonObject", void 0);
    return GetDomainsResponse;
}(SpeakeasyBase));
export { GetDomainsResponse };
