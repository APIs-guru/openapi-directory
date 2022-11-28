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
var AddVideosToChannelPathParams = /** @class */ (function (_super) {
    __extends(AddVideosToChannelPathParams, _super);
    function AddVideosToChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], AddVideosToChannelPathParams.prototype, "channelId", void 0);
    return AddVideosToChannelPathParams;
}(SpeakeasyBase));
export { AddVideosToChannelPathParams };
var AddVideosToChannelRequestBody = /** @class */ (function (_super) {
    __extends(AddVideosToChannelRequestBody, _super);
    function AddVideosToChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=video_uri" }),
        __metadata("design:type", String)
    ], AddVideosToChannelRequestBody.prototype, "videoUri", void 0);
    return AddVideosToChannelRequestBody;
}(SpeakeasyBase));
export { AddVideosToChannelRequestBody };
var AddVideosToChannelSecurity = /** @class */ (function (_super) {
    __extends(AddVideosToChannelSecurity, _super);
    function AddVideosToChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AddVideosToChannelSecurity.prototype, "oauth2", void 0);
    return AddVideosToChannelSecurity;
}(SpeakeasyBase));
export { AddVideosToChannelSecurity };
var AddVideosToChannelRequest = /** @class */ (function (_super) {
    __extends(AddVideosToChannelRequest, _super);
    function AddVideosToChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideosToChannelPathParams)
    ], AddVideosToChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddVideosToChannelRequestBody)
    ], AddVideosToChannelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideosToChannelSecurity)
    ], AddVideosToChannelRequest.prototype, "security", void 0);
    return AddVideosToChannelRequest;
}(SpeakeasyBase));
export { AddVideosToChannelRequest };
var AddVideosToChannelResponse = /** @class */ (function (_super) {
    __extends(AddVideosToChannelResponse, _super);
    function AddVideosToChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddVideosToChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddVideosToChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], AddVideosToChannelResponse.prototype, "legacyError", void 0);
    return AddVideosToChannelResponse;
}(SpeakeasyBase));
export { AddVideosToChannelResponse };
