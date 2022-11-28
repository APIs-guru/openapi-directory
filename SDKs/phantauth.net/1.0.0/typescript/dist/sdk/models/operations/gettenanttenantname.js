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
var GetTenantTenantnamePathParams = /** @class */ (function (_super) {
    __extends(GetTenantTenantnamePathParams, _super);
    function GetTenantTenantnamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantname" }),
        __metadata("design:type", String)
    ], GetTenantTenantnamePathParams.prototype, "tenantname", void 0);
    return GetTenantTenantnamePathParams;
}(SpeakeasyBase));
export { GetTenantTenantnamePathParams };
var GetTenantTenantname200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTenantTenantname200ApplicationJson, _super);
    function GetTenantTenantname200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@id" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "atId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=about" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "about", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribution" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "attribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=depot" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "depot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=depots" }),
        __metadata("design:type", Array)
    ], GetTenantTenantname200ApplicationJson.prototype, "depots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", Boolean)
    ], GetTenantTenantname200ApplicationJson.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=factories" }),
        __metadata("design:type", Array)
    ], GetTenantTenantname200ApplicationJson.prototype, "factories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=factory" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "factory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=favicon" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "favicon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "script", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sheet" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "sheet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "sub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtenant" }),
        __metadata("design:type", Boolean)
    ], GetTenantTenantname200ApplicationJson.prototype, "subtenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=theme" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "theme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userinfo" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "userinfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], GetTenantTenantname200ApplicationJson.prototype, "website", void 0);
    return GetTenantTenantname200ApplicationJson;
}(SpeakeasyBase));
export { GetTenantTenantname200ApplicationJson };
var GetTenantTenantnameRequest = /** @class */ (function (_super) {
    __extends(GetTenantTenantnameRequest, _super);
    function GetTenantTenantnameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTenantTenantnamePathParams)
    ], GetTenantTenantnameRequest.prototype, "pathParams", void 0);
    return GetTenantTenantnameRequest;
}(SpeakeasyBase));
export { GetTenantTenantnameRequest };
var GetTenantTenantnameResponse = /** @class */ (function (_super) {
    __extends(GetTenantTenantnameResponse, _super);
    function GetTenantTenantnameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTenantTenantnameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTenantTenantname200ApplicationJson)
    ], GetTenantTenantnameResponse.prototype, "getTenantTenantname200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTenantTenantnameResponse.prototype, "statusCode", void 0);
    return GetTenantTenantnameResponse;
}(SpeakeasyBase));
export { GetTenantTenantnameResponse };
