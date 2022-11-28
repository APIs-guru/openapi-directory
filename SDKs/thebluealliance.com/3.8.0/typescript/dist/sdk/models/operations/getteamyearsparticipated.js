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
var GetTeamYearsParticipatedPathParams = /** @class */ (function (_super) {
    __extends(GetTeamYearsParticipatedPathParams, _super);
    function GetTeamYearsParticipatedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamYearsParticipatedPathParams.prototype, "teamKey", void 0);
    return GetTeamYearsParticipatedPathParams;
}(SpeakeasyBase));
export { GetTeamYearsParticipatedPathParams };
var GetTeamYearsParticipatedHeaders = /** @class */ (function (_super) {
    __extends(GetTeamYearsParticipatedHeaders, _super);
    function GetTeamYearsParticipatedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamYearsParticipatedHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamYearsParticipatedHeaders;
}(SpeakeasyBase));
export { GetTeamYearsParticipatedHeaders };
var GetTeamYearsParticipatedSecurity = /** @class */ (function (_super) {
    __extends(GetTeamYearsParticipatedSecurity, _super);
    function GetTeamYearsParticipatedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamYearsParticipatedSecurity.prototype, "apiKey", void 0);
    return GetTeamYearsParticipatedSecurity;
}(SpeakeasyBase));
export { GetTeamYearsParticipatedSecurity };
var GetTeamYearsParticipatedRequest = /** @class */ (function (_super) {
    __extends(GetTeamYearsParticipatedRequest, _super);
    function GetTeamYearsParticipatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamYearsParticipatedPathParams)
    ], GetTeamYearsParticipatedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamYearsParticipatedHeaders)
    ], GetTeamYearsParticipatedRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamYearsParticipatedSecurity)
    ], GetTeamYearsParticipatedRequest.prototype, "security", void 0);
    return GetTeamYearsParticipatedRequest;
}(SpeakeasyBase));
export { GetTeamYearsParticipatedRequest };
var GetTeamYearsParticipatedResponse = /** @class */ (function (_super) {
    __extends(GetTeamYearsParticipatedResponse, _super);
    function GetTeamYearsParticipatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamYearsParticipatedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamYearsParticipatedResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamYearsParticipatedResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetTeamYearsParticipatedResponse.prototype, "getTeamYearsParticipated200ApplicationJsonIntegers", void 0);
    return GetTeamYearsParticipatedResponse;
}(SpeakeasyBase));
export { GetTeamYearsParticipatedResponse };
