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
var GetTeamEventAwardsPathParams = /** @class */ (function (_super) {
    __extends(GetTeamEventAwardsPathParams, _super);
    function GetTeamEventAwardsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetTeamEventAwardsPathParams.prototype, "eventKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamEventAwardsPathParams.prototype, "teamKey", void 0);
    return GetTeamEventAwardsPathParams;
}(SpeakeasyBase));
export { GetTeamEventAwardsPathParams };
var GetTeamEventAwardsHeaders = /** @class */ (function (_super) {
    __extends(GetTeamEventAwardsHeaders, _super);
    function GetTeamEventAwardsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamEventAwardsHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamEventAwardsHeaders;
}(SpeakeasyBase));
export { GetTeamEventAwardsHeaders };
var GetTeamEventAwardsSecurity = /** @class */ (function (_super) {
    __extends(GetTeamEventAwardsSecurity, _super);
    function GetTeamEventAwardsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamEventAwardsSecurity.prototype, "apiKey", void 0);
    return GetTeamEventAwardsSecurity;
}(SpeakeasyBase));
export { GetTeamEventAwardsSecurity };
var GetTeamEventAwardsRequest = /** @class */ (function (_super) {
    __extends(GetTeamEventAwardsRequest, _super);
    function GetTeamEventAwardsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventAwardsPathParams)
    ], GetTeamEventAwardsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventAwardsHeaders)
    ], GetTeamEventAwardsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventAwardsSecurity)
    ], GetTeamEventAwardsRequest.prototype, "security", void 0);
    return GetTeamEventAwardsRequest;
}(SpeakeasyBase));
export { GetTeamEventAwardsRequest };
var GetTeamEventAwardsResponse = /** @class */ (function (_super) {
    __extends(GetTeamEventAwardsResponse, _super);
    function GetTeamEventAwardsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Award }),
        __metadata("design:type", Array)
    ], GetTeamEventAwardsResponse.prototype, "awards", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamEventAwardsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamEventAwardsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamEventAwardsResponse.prototype, "statusCode", void 0);
    return GetTeamEventAwardsResponse;
}(SpeakeasyBase));
export { GetTeamEventAwardsResponse };
