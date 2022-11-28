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
var GetTeamMatchesByYearSimplePathParams = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearSimplePathParams, _super);
    function GetTeamMatchesByYearSimplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamMatchesByYearSimplePathParams.prototype, "teamKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamMatchesByYearSimplePathParams.prototype, "year", void 0);
    return GetTeamMatchesByYearSimplePathParams;
}(SpeakeasyBase));
export { GetTeamMatchesByYearSimplePathParams };
var GetTeamMatchesByYearSimpleHeaders = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearSimpleHeaders, _super);
    function GetTeamMatchesByYearSimpleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamMatchesByYearSimpleHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamMatchesByYearSimpleHeaders;
}(SpeakeasyBase));
export { GetTeamMatchesByYearSimpleHeaders };
var GetTeamMatchesByYearSimpleSecurity = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearSimpleSecurity, _super);
    function GetTeamMatchesByYearSimpleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamMatchesByYearSimpleSecurity.prototype, "apiKey", void 0);
    return GetTeamMatchesByYearSimpleSecurity;
}(SpeakeasyBase));
export { GetTeamMatchesByYearSimpleSecurity };
var GetTeamMatchesByYearSimpleRequest = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearSimpleRequest, _super);
    function GetTeamMatchesByYearSimpleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMatchesByYearSimplePathParams)
    ], GetTeamMatchesByYearSimpleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMatchesByYearSimpleHeaders)
    ], GetTeamMatchesByYearSimpleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMatchesByYearSimpleSecurity)
    ], GetTeamMatchesByYearSimpleRequest.prototype, "security", void 0);
    return GetTeamMatchesByYearSimpleRequest;
}(SpeakeasyBase));
export { GetTeamMatchesByYearSimpleRequest };
var GetTeamMatchesByYearSimpleResponse = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearSimpleResponse, _super);
    function GetTeamMatchesByYearSimpleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamMatchesByYearSimpleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamMatchesByYearSimpleResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MatchSimple }),
        __metadata("design:type", Array)
    ], GetTeamMatchesByYearSimpleResponse.prototype, "matchSimples", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamMatchesByYearSimpleResponse.prototype, "statusCode", void 0);
    return GetTeamMatchesByYearSimpleResponse;
}(SpeakeasyBase));
export { GetTeamMatchesByYearSimpleResponse };
