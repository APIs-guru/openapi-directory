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
var GetAssociationsByObjectPathParams = /** @class */ (function (_super) {
    __extends(GetAssociationsByObjectPathParams, _super);
    function GetAssociationsByObjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ObjectId" }),
        __metadata("design:type", String)
    ], GetAssociationsByObjectPathParams.prototype, "objectId", void 0);
    return GetAssociationsByObjectPathParams;
}(SpeakeasyBase));
export { GetAssociationsByObjectPathParams };
var GetAssociationsByObjectHeaders = /** @class */ (function (_super) {
    __extends(GetAssociationsByObjectHeaders, _super);
    function GetAssociationsByObjectHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" }),
        __metadata("design:type", String)
    ], GetAssociationsByObjectHeaders.prototype, "xeroTenantId", void 0);
    return GetAssociationsByObjectHeaders;
}(SpeakeasyBase));
export { GetAssociationsByObjectHeaders };
var GetAssociationsByObjectSecurity = /** @class */ (function (_super) {
    __extends(GetAssociationsByObjectSecurity, _super);
    function GetAssociationsByObjectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetAssociationsByObjectSecurity.prototype, "oAuth2", void 0);
    return GetAssociationsByObjectSecurity;
}(SpeakeasyBase));
export { GetAssociationsByObjectSecurity };
var GetAssociationsByObjectRequest = /** @class */ (function (_super) {
    __extends(GetAssociationsByObjectRequest, _super);
    function GetAssociationsByObjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociationsByObjectPathParams)
    ], GetAssociationsByObjectRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociationsByObjectHeaders)
    ], GetAssociationsByObjectRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociationsByObjectSecurity)
    ], GetAssociationsByObjectRequest.prototype, "security", void 0);
    return GetAssociationsByObjectRequest;
}(SpeakeasyBase));
export { GetAssociationsByObjectRequest };
var GetAssociationsByObjectResponse = /** @class */ (function (_super) {
    __extends(GetAssociationsByObjectResponse, _super);
    function GetAssociationsByObjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ elemType: shared.Association }),
        __metadata("design:type", Array)
    ], GetAssociationsByObjectResponse.prototype, "associations", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAssociationsByObjectResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAssociationsByObjectResponse.prototype, "statusCode", void 0);
    return GetAssociationsByObjectResponse;
}(SpeakeasyBase));
export { GetAssociationsByObjectResponse };
