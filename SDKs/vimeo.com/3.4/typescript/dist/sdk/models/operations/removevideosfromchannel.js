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
var RemoveVideosFromChannelPathParams = /** @class */ (function (_super) {
    __extends(RemoveVideosFromChannelPathParams, _super);
    function RemoveVideosFromChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], RemoveVideosFromChannelPathParams.prototype, "channelId", void 0);
    return RemoveVideosFromChannelPathParams;
}(SpeakeasyBase));
export { RemoveVideosFromChannelPathParams };
var RemoveVideosFromChannelRequestBody = /** @class */ (function (_super) {
    __extends(RemoveVideosFromChannelRequestBody, _super);
    function RemoveVideosFromChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=video_uri" }),
        __metadata("design:type", String)
    ], RemoveVideosFromChannelRequestBody.prototype, "videoUri", void 0);
    return RemoveVideosFromChannelRequestBody;
}(SpeakeasyBase));
export { RemoveVideosFromChannelRequestBody };
var RemoveVideosFromChannelSecurity = /** @class */ (function (_super) {
    __extends(RemoveVideosFromChannelSecurity, _super);
    function RemoveVideosFromChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RemoveVideosFromChannelSecurity.prototype, "oauth2", void 0);
    return RemoveVideosFromChannelSecurity;
}(SpeakeasyBase));
export { RemoveVideosFromChannelSecurity };
var RemoveVideosFromChannelRequest = /** @class */ (function (_super) {
    __extends(RemoveVideosFromChannelRequest, _super);
    function RemoveVideosFromChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveVideosFromChannelPathParams)
    ], RemoveVideosFromChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveVideosFromChannelRequestBody)
    ], RemoveVideosFromChannelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveVideosFromChannelSecurity)
    ], RemoveVideosFromChannelRequest.prototype, "security", void 0);
    return RemoveVideosFromChannelRequest;
}(SpeakeasyBase));
export { RemoveVideosFromChannelRequest };
var RemoveVideosFromChannelResponse = /** @class */ (function (_super) {
    __extends(RemoveVideosFromChannelResponse, _super);
    function RemoveVideosFromChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveVideosFromChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveVideosFromChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], RemoveVideosFromChannelResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Video)
    ], RemoveVideosFromChannelResponse.prototype, "video", void 0);
    return RemoveVideosFromChannelResponse;
}(SpeakeasyBase));
export { RemoveVideosFromChannelResponse };
