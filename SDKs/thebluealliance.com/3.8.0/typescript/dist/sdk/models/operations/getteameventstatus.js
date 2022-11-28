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
var GetTeamEventStatusPathParams = /** @class */ (function (_super) {
    __extends(GetTeamEventStatusPathParams, _super);
    function GetTeamEventStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetTeamEventStatusPathParams.prototype, "eventKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamEventStatusPathParams.prototype, "teamKey", void 0);
    return GetTeamEventStatusPathParams;
}(SpeakeasyBase));
export { GetTeamEventStatusPathParams };
var GetTeamEventStatusHeaders = /** @class */ (function (_super) {
    __extends(GetTeamEventStatusHeaders, _super);
    function GetTeamEventStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamEventStatusHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamEventStatusHeaders;
}(SpeakeasyBase));
export { GetTeamEventStatusHeaders };
var GetTeamEventStatusSecurity = /** @class */ (function (_super) {
    __extends(GetTeamEventStatusSecurity, _super);
    function GetTeamEventStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamEventStatusSecurity.prototype, "apiKey", void 0);
    return GetTeamEventStatusSecurity;
}(SpeakeasyBase));
export { GetTeamEventStatusSecurity };
var GetTeamEventStatusRequest = /** @class */ (function (_super) {
    __extends(GetTeamEventStatusRequest, _super);
    function GetTeamEventStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventStatusPathParams)
    ], GetTeamEventStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventStatusHeaders)
    ], GetTeamEventStatusRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventStatusSecurity)
    ], GetTeamEventStatusRequest.prototype, "security", void 0);
    return GetTeamEventStatusRequest;
}(SpeakeasyBase));
export { GetTeamEventStatusRequest };
var GetTeamEventStatusResponse = /** @class */ (function (_super) {
    __extends(GetTeamEventStatusResponse, _super);
    function GetTeamEventStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamEventStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamEventStatusResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamEventStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamEventStatus)
    ], GetTeamEventStatusResponse.prototype, "teamEventStatus", void 0);
    return GetTeamEventStatusResponse;
}(SpeakeasyBase));
export { GetTeamEventStatusResponse };
