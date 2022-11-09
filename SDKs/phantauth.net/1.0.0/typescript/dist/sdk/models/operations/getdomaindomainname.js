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
var GetDomainDomainnamePathParams = /** @class */ (function (_super) {
    __extends(GetDomainDomainnamePathParams, _super);
    function GetDomainDomainnamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=domainname" }),
        __metadata("design:type", String)
    ], GetDomainDomainnamePathParams.prototype, "domainname", void 0);
    return GetDomainDomainnamePathParams;
}(SpeakeasyBase));
export { GetDomainDomainnamePathParams };
var GetDomainDomainnameRequest = /** @class */ (function (_super) {
    __extends(GetDomainDomainnameRequest, _super);
    function GetDomainDomainnameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDomainDomainnamePathParams)
    ], GetDomainDomainnameRequest.prototype, "pathParams", void 0);
    return GetDomainDomainnameRequest;
}(SpeakeasyBase));
export { GetDomainDomainnameRequest };
var GetDomainDomainname200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDomainDomainname200ApplicationJson, _super);
    function GetDomainDomainname200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=@id" }),
        __metadata("design:type", String)
    ], GetDomainDomainname200ApplicationJson.prototype, "atId", void 0);
    __decorate([
        Metadata({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], GetDomainDomainname200ApplicationJson.prototype, "logo", void 0);
    __decorate([
        Metadata({ data: "json, name=members" }),
        __metadata("design:type", Array)
    ], GetDomainDomainname200ApplicationJson.prototype, "members", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDomainDomainname200ApplicationJson.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=profile" }),
        __metadata("design:type", String)
    ], GetDomainDomainname200ApplicationJson.prototype, "profile", void 0);
    __decorate([
        Metadata({ data: "json, name=sub" }),
        __metadata("design:type", String)
    ], GetDomainDomainname200ApplicationJson.prototype, "sub", void 0);
    return GetDomainDomainname200ApplicationJson;
}(SpeakeasyBase));
export { GetDomainDomainname200ApplicationJson };
var GetDomainDomainnameResponse = /** @class */ (function (_super) {
    __extends(GetDomainDomainnameResponse, _super);
    function GetDomainDomainnameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDomainDomainnameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDomainDomainname200ApplicationJson)
    ], GetDomainDomainnameResponse.prototype, "getDomainDomainname200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDomainDomainnameResponse.prototype, "statusCode", void 0);
    return GetDomainDomainnameResponse;
}(SpeakeasyBase));
export { GetDomainDomainnameResponse };
