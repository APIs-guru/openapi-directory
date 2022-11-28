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
var GetDomainPathParams = /** @class */ (function (_super) {
    __extends(GetDomainPathParams, _super);
    function GetDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetDomainPathParams.prototype, "name", void 0);
    return GetDomainPathParams;
}(SpeakeasyBase));
export { GetDomainPathParams };
var GetDomainQueryParams = /** @class */ (function (_super) {
    __extends(GetDomainQueryParams, _super);
    function GetDomainQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamId" }),
        __metadata("design:type", String)
    ], GetDomainQueryParams.prototype, "teamId", void 0);
    return GetDomainQueryParams;
}(SpeakeasyBase));
export { GetDomainQueryParams };
var GetDomain200ApplicationJsonDomainAliases = /** @class */ (function (_super) {
    __extends(GetDomain200ApplicationJsonDomainAliases, _super);
    function GetDomain200ApplicationJsonDomainAliases() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], GetDomain200ApplicationJsonDomainAliases.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], GetDomain200ApplicationJsonDomainAliases.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDomain200ApplicationJsonDomainAliases.prototype, "id", void 0);
    return GetDomain200ApplicationJsonDomainAliases;
}(SpeakeasyBase));
export { GetDomain200ApplicationJsonDomainAliases };
var GetDomain200ApplicationJsonDomainCerts = /** @class */ (function (_super) {
    __extends(GetDomain200ApplicationJsonDomainCerts, _super);
    function GetDomain200ApplicationJsonDomainCerts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cns" }),
        __metadata("design:type", Array)
    ], GetDomain200ApplicationJsonDomainCerts.prototype, "cns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], GetDomain200ApplicationJsonDomainCerts.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDomain200ApplicationJsonDomainCerts.prototype, "id", void 0);
    return GetDomain200ApplicationJsonDomainCerts;
}(SpeakeasyBase));
export { GetDomain200ApplicationJsonDomainCerts };
// GetDomain200ApplicationJsonDomainCreator
/**
 * Information about who added the domain
**/
var GetDomain200ApplicationJsonDomainCreator = /** @class */ (function (_super) {
    __extends(GetDomain200ApplicationJsonDomainCreator, _super);
    function GetDomain200ApplicationJsonDomainCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], GetDomain200ApplicationJsonDomainCreator.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GetDomain200ApplicationJsonDomainCreator.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDomain200ApplicationJsonDomainCreator.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDomainReseller" }),
        __metadata("design:type", Boolean)
    ], GetDomain200ApplicationJsonDomainCreator.prototype, "isDomainReseller", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetDomain200ApplicationJsonDomainCreator.prototype, "username", void 0);
    return GetDomain200ApplicationJsonDomainCreator;
}(SpeakeasyBase));
export { GetDomain200ApplicationJsonDomainCreator };
export var GetDomain200ApplicationJsonDomainServiceTypeEnum;
(function (GetDomain200ApplicationJsonDomainServiceTypeEnum) {
    GetDomain200ApplicationJsonDomainServiceTypeEnum["ZeitWorld"] = "zeit.world";
    GetDomain200ApplicationJsonDomainServiceTypeEnum["External"] = "external";
    GetDomain200ApplicationJsonDomainServiceTypeEnum["Na"] = "na";
})(GetDomain200ApplicationJsonDomainServiceTypeEnum || (GetDomain200ApplicationJsonDomainServiceTypeEnum = {}));
// GetDomain200ApplicationJsonDomain
/**
 * The domain information
**/
var GetDomain200ApplicationJsonDomain = /** @class */ (function (_super) {
    __extends(GetDomain200ApplicationJsonDomain, _super);
    function GetDomain200ApplicationJsonDomain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aliases", elemType: GetDomain200ApplicationJsonDomainAliases }),
        __metadata("design:type", Array)
    ], GetDomain200ApplicationJsonDomain.prototype, "aliases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boughtAt" }),
        __metadata("design:type", Number)
    ], GetDomain200ApplicationJsonDomain.prototype, "boughtAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cdnEnabled" }),
        __metadata("design:type", Boolean)
    ], GetDomain200ApplicationJsonDomain.prototype, "cdnEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certs", elemType: GetDomain200ApplicationJsonDomainCerts }),
        __metadata("design:type", Array)
    ], GetDomain200ApplicationJsonDomain.prototype, "certs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Number)
    ], GetDomain200ApplicationJsonDomain.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", GetDomain200ApplicationJsonDomainCreator)
    ], GetDomain200ApplicationJsonDomain.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiresAt" }),
        __metadata("design:type", Number)
    ], GetDomain200ApplicationJsonDomain.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDomain200ApplicationJsonDomain.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intendedNameservers" }),
        __metadata("design:type", Array)
    ], GetDomain200ApplicationJsonDomain.prototype, "intendedNameservers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDomain200ApplicationJsonDomain.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameservers" }),
        __metadata("design:type", Array)
    ], GetDomain200ApplicationJsonDomain.prototype, "nameservers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsVerifiedAt" }),
        __metadata("design:type", Number)
    ], GetDomain200ApplicationJsonDomain.prototype, "nsVerifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderedAt" }),
        __metadata("design:type", Number)
    ], GetDomain200ApplicationJsonDomain.prototype, "orderedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceType" }),
        __metadata("design:type", String)
    ], GetDomain200ApplicationJsonDomain.prototype, "serviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suffix" }),
        __metadata("design:type", Boolean)
    ], GetDomain200ApplicationJsonDomain.prototype, "suffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferredAt" }),
        __metadata("design:type", Number)
    ], GetDomain200ApplicationJsonDomain.prototype, "transferredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txtVerifiedAt" }),
        __metadata("design:type", Number)
    ], GetDomain200ApplicationJsonDomain.prototype, "txtVerifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verificationRecord" }),
        __metadata("design:type", String)
    ], GetDomain200ApplicationJsonDomain.prototype, "verificationRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verified" }),
        __metadata("design:type", Boolean)
    ], GetDomain200ApplicationJsonDomain.prototype, "verified", void 0);
    return GetDomain200ApplicationJsonDomain;
}(SpeakeasyBase));
export { GetDomain200ApplicationJsonDomain };
var GetDomain200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDomain200ApplicationJson, _super);
    function GetDomain200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", GetDomain200ApplicationJsonDomain)
    ], GetDomain200ApplicationJson.prototype, "domain", void 0);
    return GetDomain200ApplicationJson;
}(SpeakeasyBase));
export { GetDomain200ApplicationJson };
export var GetDomain404ApplicationJsonErrorCodeEnum;
(function (GetDomain404ApplicationJsonErrorCodeEnum) {
    GetDomain404ApplicationJsonErrorCodeEnum["NotFound"] = "not_found";
})(GetDomain404ApplicationJsonErrorCodeEnum || (GetDomain404ApplicationJsonErrorCodeEnum = {}));
var GetDomain404ApplicationJsonError = /** @class */ (function (_super) {
    __extends(GetDomain404ApplicationJsonError, _super);
    function GetDomain404ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetDomain404ApplicationJsonError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDomain404ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDomain404ApplicationJsonError.prototype, "name", void 0);
    return GetDomain404ApplicationJsonError;
}(SpeakeasyBase));
export { GetDomain404ApplicationJsonError };
var GetDomain404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDomain404ApplicationJson, _super);
    function GetDomain404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetDomain404ApplicationJsonError)
    ], GetDomain404ApplicationJson.prototype, "error", void 0);
    return GetDomain404ApplicationJson;
}(SpeakeasyBase));
export { GetDomain404ApplicationJson };
var GetDomainRequest = /** @class */ (function (_super) {
    __extends(GetDomainRequest, _super);
    function GetDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainPathParams)
    ], GetDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainQueryParams)
    ], GetDomainRequest.prototype, "queryParams", void 0);
    return GetDomainRequest;
}(SpeakeasyBase));
export { GetDomainRequest };
var GetDomainResponse = /** @class */ (function (_super) {
    __extends(GetDomainResponse, _super);
    function GetDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomainResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomain200ApplicationJson)
    ], GetDomainResponse.prototype, "getDomain200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomain404ApplicationJson)
    ], GetDomainResponse.prototype, "getDomain404ApplicationJsonObject", void 0);
    return GetDomainResponse;
}(SpeakeasyBase));
export { GetDomainResponse };
