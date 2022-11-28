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
var GetTeamEventsByYearPathParams = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearPathParams, _super);
    function GetTeamEventsByYearPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamEventsByYearPathParams.prototype, "teamKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamEventsByYearPathParams.prototype, "year", void 0);
    return GetTeamEventsByYearPathParams;
}(SpeakeasyBase));
export { GetTeamEventsByYearPathParams };
var GetTeamEventsByYearHeaders = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearHeaders, _super);
    function GetTeamEventsByYearHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamEventsByYearHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamEventsByYearHeaders;
}(SpeakeasyBase));
export { GetTeamEventsByYearHeaders };
var GetTeamEventsByYearSecurity = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearSecurity, _super);
    function GetTeamEventsByYearSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamEventsByYearSecurity.prototype, "apiKey", void 0);
    return GetTeamEventsByYearSecurity;
}(SpeakeasyBase));
export { GetTeamEventsByYearSecurity };
var GetTeamEventsByYearRequest = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearRequest, _super);
    function GetTeamEventsByYearRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventsByYearPathParams)
    ], GetTeamEventsByYearRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventsByYearHeaders)
    ], GetTeamEventsByYearRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventsByYearSecurity)
    ], GetTeamEventsByYearRequest.prototype, "security", void 0);
    return GetTeamEventsByYearRequest;
}(SpeakeasyBase));
export { GetTeamEventsByYearRequest };
var GetTeamEventsByYearResponse = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearResponse, _super);
    function GetTeamEventsByYearResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamEventsByYearResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Event }),
        __metadata("design:type", Array)
    ], GetTeamEventsByYearResponse.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamEventsByYearResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamEventsByYearResponse.prototype, "statusCode", void 0);
    return GetTeamEventsByYearResponse;
}(SpeakeasyBase));
export { GetTeamEventsByYearResponse };
