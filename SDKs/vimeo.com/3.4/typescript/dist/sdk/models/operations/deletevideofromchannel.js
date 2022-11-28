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
var DeleteVideoFromChannelPathParams = /** @class */ (function (_super) {
    __extends(DeleteVideoFromChannelPathParams, _super);
    function DeleteVideoFromChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoFromChannelPathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoFromChannelPathParams.prototype, "videoId", void 0);
    return DeleteVideoFromChannelPathParams;
}(SpeakeasyBase));
export { DeleteVideoFromChannelPathParams };
var DeleteVideoFromChannelSecurity = /** @class */ (function (_super) {
    __extends(DeleteVideoFromChannelSecurity, _super);
    function DeleteVideoFromChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteVideoFromChannelSecurity.prototype, "oauth2", void 0);
    return DeleteVideoFromChannelSecurity;
}(SpeakeasyBase));
export { DeleteVideoFromChannelSecurity };
var DeleteVideoFromChannelRequest = /** @class */ (function (_super) {
    __extends(DeleteVideoFromChannelRequest, _super);
    function DeleteVideoFromChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoFromChannelPathParams)
    ], DeleteVideoFromChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoFromChannelSecurity)
    ], DeleteVideoFromChannelRequest.prototype, "security", void 0);
    return DeleteVideoFromChannelRequest;
}(SpeakeasyBase));
export { DeleteVideoFromChannelRequest };
var DeleteVideoFromChannelResponse = /** @class */ (function (_super) {
    __extends(DeleteVideoFromChannelResponse, _super);
    function DeleteVideoFromChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteVideoFromChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteVideoFromChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], DeleteVideoFromChannelResponse.prototype, "legacyError", void 0);
    return DeleteVideoFromChannelResponse;
}(SpeakeasyBase));
export { DeleteVideoFromChannelResponse };
