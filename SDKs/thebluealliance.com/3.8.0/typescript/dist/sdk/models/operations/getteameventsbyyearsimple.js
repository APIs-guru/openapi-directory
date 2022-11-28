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
var GetTeamEventsByYearSimplePathParams = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearSimplePathParams, _super);
    function GetTeamEventsByYearSimplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamEventsByYearSimplePathParams.prototype, "teamKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamEventsByYearSimplePathParams.prototype, "year", void 0);
    return GetTeamEventsByYearSimplePathParams;
}(SpeakeasyBase));
export { GetTeamEventsByYearSimplePathParams };
var GetTeamEventsByYearSimpleHeaders = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearSimpleHeaders, _super);
    function GetTeamEventsByYearSimpleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamEventsByYearSimpleHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamEventsByYearSimpleHeaders;
}(SpeakeasyBase));
export { GetTeamEventsByYearSimpleHeaders };
var GetTeamEventsByYearSimpleSecurity = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearSimpleSecurity, _super);
    function GetTeamEventsByYearSimpleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamEventsByYearSimpleSecurity.prototype, "apiKey", void 0);
    return GetTeamEventsByYearSimpleSecurity;
}(SpeakeasyBase));
export { GetTeamEventsByYearSimpleSecurity };
var GetTeamEventsByYearSimpleRequest = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearSimpleRequest, _super);
    function GetTeamEventsByYearSimpleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventsByYearSimplePathParams)
    ], GetTeamEventsByYearSimpleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventsByYearSimpleHeaders)
    ], GetTeamEventsByYearSimpleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventsByYearSimpleSecurity)
    ], GetTeamEventsByYearSimpleRequest.prototype, "security", void 0);
    return GetTeamEventsByYearSimpleRequest;
}(SpeakeasyBase));
export { GetTeamEventsByYearSimpleRequest };
var GetTeamEventsByYearSimpleResponse = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearSimpleResponse, _super);
    function GetTeamEventsByYearSimpleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamEventsByYearSimpleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.EventSimple }),
        __metadata("design:type", Array)
    ], GetTeamEventsByYearSimpleResponse.prototype, "eventSimples", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamEventsByYearSimpleResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamEventsByYearSimpleResponse.prototype, "statusCode", void 0);
    return GetTeamEventsByYearSimpleResponse;
}(SpeakeasyBase));
export { GetTeamEventsByYearSimpleResponse };
