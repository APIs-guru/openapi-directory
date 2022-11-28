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
var AddChannelModeratorsPathParams = /** @class */ (function (_super) {
    __extends(AddChannelModeratorsPathParams, _super);
    function AddChannelModeratorsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], AddChannelModeratorsPathParams.prototype, "channelId", void 0);
    return AddChannelModeratorsPathParams;
}(SpeakeasyBase));
export { AddChannelModeratorsPathParams };
var AddChannelModeratorsRequestBody = /** @class */ (function (_super) {
    __extends(AddChannelModeratorsRequestBody, _super);
    function AddChannelModeratorsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_uri" }),
        __metadata("design:type", String)
    ], AddChannelModeratorsRequestBody.prototype, "userUri", void 0);
    return AddChannelModeratorsRequestBody;
}(SpeakeasyBase));
export { AddChannelModeratorsRequestBody };
var AddChannelModeratorsSecurity = /** @class */ (function (_super) {
    __extends(AddChannelModeratorsSecurity, _super);
    function AddChannelModeratorsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AddChannelModeratorsSecurity.prototype, "oauth2", void 0);
    return AddChannelModeratorsSecurity;
}(SpeakeasyBase));
export { AddChannelModeratorsSecurity };
var AddChannelModeratorsRequest = /** @class */ (function (_super) {
    __extends(AddChannelModeratorsRequest, _super);
    function AddChannelModeratorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddChannelModeratorsPathParams)
    ], AddChannelModeratorsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddChannelModeratorsRequestBody)
    ], AddChannelModeratorsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddChannelModeratorsSecurity)
    ], AddChannelModeratorsRequest.prototype, "security", void 0);
    return AddChannelModeratorsRequest;
}(SpeakeasyBase));
export { AddChannelModeratorsRequest };
var AddChannelModeratorsResponse = /** @class */ (function (_super) {
    __extends(AddChannelModeratorsResponse, _super);
    function AddChannelModeratorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddChannelModeratorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddChannelModeratorsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], AddChannelModeratorsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], AddChannelModeratorsResponse.prototype, "legacyError", void 0);
    return AddChannelModeratorsResponse;
}(SpeakeasyBase));
export { AddChannelModeratorsResponse };
