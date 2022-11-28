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
var GetTeamEventsStatusesByYearPathParams = /** @class */ (function (_super) {
    __extends(GetTeamEventsStatusesByYearPathParams, _super);
    function GetTeamEventsStatusesByYearPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamEventsStatusesByYearPathParams.prototype, "teamKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamEventsStatusesByYearPathParams.prototype, "year", void 0);
    return GetTeamEventsStatusesByYearPathParams;
}(SpeakeasyBase));
export { GetTeamEventsStatusesByYearPathParams };
var GetTeamEventsStatusesByYearHeaders = /** @class */ (function (_super) {
    __extends(GetTeamEventsStatusesByYearHeaders, _super);
    function GetTeamEventsStatusesByYearHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamEventsStatusesByYearHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamEventsStatusesByYearHeaders;
}(SpeakeasyBase));
export { GetTeamEventsStatusesByYearHeaders };
var GetTeamEventsStatusesByYearSecurity = /** @class */ (function (_super) {
    __extends(GetTeamEventsStatusesByYearSecurity, _super);
    function GetTeamEventsStatusesByYearSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamEventsStatusesByYearSecurity.prototype, "apiKey", void 0);
    return GetTeamEventsStatusesByYearSecurity;
}(SpeakeasyBase));
export { GetTeamEventsStatusesByYearSecurity };
var GetTeamEventsStatusesByYearRequest = /** @class */ (function (_super) {
    __extends(GetTeamEventsStatusesByYearRequest, _super);
    function GetTeamEventsStatusesByYearRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventsStatusesByYearPathParams)
    ], GetTeamEventsStatusesByYearRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventsStatusesByYearHeaders)
    ], GetTeamEventsStatusesByYearRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventsStatusesByYearSecurity)
    ], GetTeamEventsStatusesByYearRequest.prototype, "security", void 0);
    return GetTeamEventsStatusesByYearRequest;
}(SpeakeasyBase));
export { GetTeamEventsStatusesByYearRequest };
var GetTeamEventsStatusesByYearResponse = /** @class */ (function (_super) {
    __extends(GetTeamEventsStatusesByYearResponse, _super);
    function GetTeamEventsStatusesByYearResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamEventsStatusesByYearResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamEventsStatusesByYearResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamEventsStatusesByYearResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TeamEventStatus }),
        __metadata("design:type", Map)
    ], GetTeamEventsStatusesByYearResponse.prototype, "getTeamEventsStatusesByYear200ApplicationJsonObject", void 0);
    return GetTeamEventsStatusesByYearResponse;
}(SpeakeasyBase));
export { GetTeamEventsStatusesByYearResponse };
