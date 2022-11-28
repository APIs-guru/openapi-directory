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
var UpdateAliasQueryParams = /** @class */ (function (_super) {
    __extends(UpdateAliasQueryParams, _super);
    function UpdateAliasQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aliasName" }),
        __metadata("design:type", String)
    ], UpdateAliasQueryParams.prototype, "aliasName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domainName" }),
        __metadata("design:type", String)
    ], UpdateAliasQueryParams.prototype, "domainName", void 0);
    return UpdateAliasQueryParams;
}(SpeakeasyBase));
export { UpdateAliasQueryParams };
var UpdateAliasSecurity = /** @class */ (function (_super) {
    __extends(UpdateAliasSecurity, _super);
    function UpdateAliasSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], UpdateAliasSecurity.prototype, "apiKeyAuth", void 0);
    return UpdateAliasSecurity;
}(SpeakeasyBase));
export { UpdateAliasSecurity };
var UpdateAliasRequest = /** @class */ (function (_super) {
    __extends(UpdateAliasRequest, _super);
    function UpdateAliasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAliasQueryParams)
    ], UpdateAliasRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateAliasModel)
    ], UpdateAliasRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAliasSecurity)
    ], UpdateAliasRequest.prototype, "security", void 0);
    return UpdateAliasRequest;
}(SpeakeasyBase));
export { UpdateAliasRequest };
var UpdateAliasResponse = /** @class */ (function (_super) {
    __extends(UpdateAliasResponse, _super);
    function UpdateAliasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAliasResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAliasResponse.prototype, "statusCode", void 0);
    return UpdateAliasResponse;
}(SpeakeasyBase));
export { UpdateAliasResponse };
