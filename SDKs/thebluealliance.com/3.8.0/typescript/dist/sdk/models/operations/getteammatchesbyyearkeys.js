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
var GetTeamMatchesByYearKeysPathParams = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearKeysPathParams, _super);
    function GetTeamMatchesByYearKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamMatchesByYearKeysPathParams.prototype, "teamKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamMatchesByYearKeysPathParams.prototype, "year", void 0);
    return GetTeamMatchesByYearKeysPathParams;
}(SpeakeasyBase));
export { GetTeamMatchesByYearKeysPathParams };
var GetTeamMatchesByYearKeysHeaders = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearKeysHeaders, _super);
    function GetTeamMatchesByYearKeysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamMatchesByYearKeysHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamMatchesByYearKeysHeaders;
}(SpeakeasyBase));
export { GetTeamMatchesByYearKeysHeaders };
var GetTeamMatchesByYearKeysSecurity = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearKeysSecurity, _super);
    function GetTeamMatchesByYearKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamMatchesByYearKeysSecurity.prototype, "apiKey", void 0);
    return GetTeamMatchesByYearKeysSecurity;
}(SpeakeasyBase));
export { GetTeamMatchesByYearKeysSecurity };
var GetTeamMatchesByYearKeysRequest = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearKeysRequest, _super);
    function GetTeamMatchesByYearKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMatchesByYearKeysPathParams)
    ], GetTeamMatchesByYearKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMatchesByYearKeysHeaders)
    ], GetTeamMatchesByYearKeysRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMatchesByYearKeysSecurity)
    ], GetTeamMatchesByYearKeysRequest.prototype, "security", void 0);
    return GetTeamMatchesByYearKeysRequest;
}(SpeakeasyBase));
export { GetTeamMatchesByYearKeysRequest };
var GetTeamMatchesByYearKeysResponse = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearKeysResponse, _super);
    function GetTeamMatchesByYearKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamMatchesByYearKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamMatchesByYearKeysResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamMatchesByYearKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetTeamMatchesByYearKeysResponse.prototype, "getTeamMatchesByYearKeys200ApplicationJsonStrings", void 0);
    return GetTeamMatchesByYearKeysResponse;
}(SpeakeasyBase));
export { GetTeamMatchesByYearKeysResponse };
