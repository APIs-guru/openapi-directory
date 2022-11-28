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
var GetTeamsByYearSimplePathParams = /** @class */ (function (_super) {
    __extends(GetTeamsByYearSimplePathParams, _super);
    function GetTeamsByYearSimplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page_num" }),
        __metadata("design:type", Number)
    ], GetTeamsByYearSimplePathParams.prototype, "pageNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamsByYearSimplePathParams.prototype, "year", void 0);
    return GetTeamsByYearSimplePathParams;
}(SpeakeasyBase));
export { GetTeamsByYearSimplePathParams };
var GetTeamsByYearSimpleHeaders = /** @class */ (function (_super) {
    __extends(GetTeamsByYearSimpleHeaders, _super);
    function GetTeamsByYearSimpleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamsByYearSimpleHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamsByYearSimpleHeaders;
}(SpeakeasyBase));
export { GetTeamsByYearSimpleHeaders };
var GetTeamsByYearSimpleSecurity = /** @class */ (function (_super) {
    __extends(GetTeamsByYearSimpleSecurity, _super);
    function GetTeamsByYearSimpleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamsByYearSimpleSecurity.prototype, "apiKey", void 0);
    return GetTeamsByYearSimpleSecurity;
}(SpeakeasyBase));
export { GetTeamsByYearSimpleSecurity };
var GetTeamsByYearSimpleRequest = /** @class */ (function (_super) {
    __extends(GetTeamsByYearSimpleRequest, _super);
    function GetTeamsByYearSimpleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsByYearSimplePathParams)
    ], GetTeamsByYearSimpleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsByYearSimpleHeaders)
    ], GetTeamsByYearSimpleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsByYearSimpleSecurity)
    ], GetTeamsByYearSimpleRequest.prototype, "security", void 0);
    return GetTeamsByYearSimpleRequest;
}(SpeakeasyBase));
export { GetTeamsByYearSimpleRequest };
var GetTeamsByYearSimpleResponse = /** @class */ (function (_super) {
    __extends(GetTeamsByYearSimpleResponse, _super);
    function GetTeamsByYearSimpleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamsByYearSimpleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamsByYearSimpleResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamsByYearSimpleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TeamSimple }),
        __metadata("design:type", Array)
    ], GetTeamsByYearSimpleResponse.prototype, "teamSimples", void 0);
    return GetTeamsByYearSimpleResponse;
}(SpeakeasyBase));
export { GetTeamsByYearSimpleResponse };
