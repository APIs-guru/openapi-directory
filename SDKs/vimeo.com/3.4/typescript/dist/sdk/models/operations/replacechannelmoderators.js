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
var ReplaceChannelModeratorsPathParams = /** @class */ (function (_super) {
    __extends(ReplaceChannelModeratorsPathParams, _super);
    function ReplaceChannelModeratorsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], ReplaceChannelModeratorsPathParams.prototype, "channelId", void 0);
    return ReplaceChannelModeratorsPathParams;
}(SpeakeasyBase));
export { ReplaceChannelModeratorsPathParams };
var ReplaceChannelModeratorsRequestBody = /** @class */ (function (_super) {
    __extends(ReplaceChannelModeratorsRequestBody, _super);
    function ReplaceChannelModeratorsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_uri" }),
        __metadata("design:type", String)
    ], ReplaceChannelModeratorsRequestBody.prototype, "userUri", void 0);
    return ReplaceChannelModeratorsRequestBody;
}(SpeakeasyBase));
export { ReplaceChannelModeratorsRequestBody };
var ReplaceChannelModeratorsSecurity = /** @class */ (function (_super) {
    __extends(ReplaceChannelModeratorsSecurity, _super);
    function ReplaceChannelModeratorsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplaceChannelModeratorsSecurity.prototype, "oauth2", void 0);
    return ReplaceChannelModeratorsSecurity;
}(SpeakeasyBase));
export { ReplaceChannelModeratorsSecurity };
var ReplaceChannelModeratorsRequest = /** @class */ (function (_super) {
    __extends(ReplaceChannelModeratorsRequest, _super);
    function ReplaceChannelModeratorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceChannelModeratorsPathParams)
    ], ReplaceChannelModeratorsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReplaceChannelModeratorsRequestBody)
    ], ReplaceChannelModeratorsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceChannelModeratorsSecurity)
    ], ReplaceChannelModeratorsRequest.prototype, "security", void 0);
    return ReplaceChannelModeratorsRequest;
}(SpeakeasyBase));
export { ReplaceChannelModeratorsRequest };
var ReplaceChannelModeratorsResponse = /** @class */ (function (_super) {
    __extends(ReplaceChannelModeratorsResponse, _super);
    function ReplaceChannelModeratorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplaceChannelModeratorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplaceChannelModeratorsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], ReplaceChannelModeratorsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], ReplaceChannelModeratorsResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], ReplaceChannelModeratorsResponse.prototype, "users", void 0);
    return ReplaceChannelModeratorsResponse;
}(SpeakeasyBase));
export { ReplaceChannelModeratorsResponse };
