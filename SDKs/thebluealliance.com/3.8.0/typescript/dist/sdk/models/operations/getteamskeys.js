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
var GetTeamsKeysPathParams = /** @class */ (function (_super) {
    __extends(GetTeamsKeysPathParams, _super);
    function GetTeamsKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page_num" }),
        __metadata("design:type", Number)
    ], GetTeamsKeysPathParams.prototype, "pageNum", void 0);
    return GetTeamsKeysPathParams;
}(SpeakeasyBase));
export { GetTeamsKeysPathParams };
var GetTeamsKeysHeaders = /** @class */ (function (_super) {
    __extends(GetTeamsKeysHeaders, _super);
    function GetTeamsKeysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamsKeysHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamsKeysHeaders;
}(SpeakeasyBase));
export { GetTeamsKeysHeaders };
var GetTeamsKeysSecurity = /** @class */ (function (_super) {
    __extends(GetTeamsKeysSecurity, _super);
    function GetTeamsKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamsKeysSecurity.prototype, "apiKey", void 0);
    return GetTeamsKeysSecurity;
}(SpeakeasyBase));
export { GetTeamsKeysSecurity };
var GetTeamsKeysRequest = /** @class */ (function (_super) {
    __extends(GetTeamsKeysRequest, _super);
    function GetTeamsKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsKeysPathParams)
    ], GetTeamsKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsKeysHeaders)
    ], GetTeamsKeysRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsKeysSecurity)
    ], GetTeamsKeysRequest.prototype, "security", void 0);
    return GetTeamsKeysRequest;
}(SpeakeasyBase));
export { GetTeamsKeysRequest };
var GetTeamsKeysResponse = /** @class */ (function (_super) {
    __extends(GetTeamsKeysResponse, _super);
    function GetTeamsKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamsKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamsKeysResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamsKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetTeamsKeysResponse.prototype, "getTeamsKeys200ApplicationJsonStrings", void 0);
    return GetTeamsKeysResponse;
}(SpeakeasyBase));
export { GetTeamsKeysResponse };
