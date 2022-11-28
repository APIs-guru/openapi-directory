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
var GetNamePathParams = /** @class */ (function (_super) {
    __extends(GetNamePathParams, _super);
    function GetNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetNamePathParams.prototype, "id", void 0);
    return GetNamePathParams;
}(SpeakeasyBase));
export { GetNamePathParams };
var GetNameQueryParams = /** @class */ (function (_super) {
    __extends(GetNameQueryParams, _super);
    function GetNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", Number)
    ], GetNameQueryParams.prototype, "time", void 0);
    return GetNameQueryParams;
}(SpeakeasyBase));
export { GetNameQueryParams };
var GetNameSecurity = /** @class */ (function (_super) {
    __extends(GetNameSecurity, _super);
    function GetNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetNameSecurity.prototype, "apiKeyAuth", void 0);
    return GetNameSecurity;
}(SpeakeasyBase));
export { GetNameSecurity };
var GetNameRequest = /** @class */ (function (_super) {
    __extends(GetNameRequest, _super);
    function GetNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNamePathParams)
    ], GetNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNameQueryParams)
    ], GetNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNameSecurity)
    ], GetNameRequest.prototype, "security", void 0);
    return GetNameRequest;
}(SpeakeasyBase));
export { GetNameRequest };
var GetNameResponse = /** @class */ (function (_super) {
    __extends(GetNameResponse, _super);
    function GetNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EntityName)
    ], GetNameResponse.prototype, "entityName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNameResponse.prototype, "statusCode", void 0);
    return GetNameResponse;
}(SpeakeasyBase));
export { GetNameResponse };
