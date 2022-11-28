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
var SetChannelPrivacyUsersPathParams = /** @class */ (function (_super) {
    __extends(SetChannelPrivacyUsersPathParams, _super);
    function SetChannelPrivacyUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], SetChannelPrivacyUsersPathParams.prototype, "channelId", void 0);
    return SetChannelPrivacyUsersPathParams;
}(SpeakeasyBase));
export { SetChannelPrivacyUsersPathParams };
var SetChannelPrivacyUsersRequestBody = /** @class */ (function (_super) {
    __extends(SetChannelPrivacyUsersRequestBody, _super);
    function SetChannelPrivacyUsersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users" }),
        __metadata("design:type", Array)
    ], SetChannelPrivacyUsersRequestBody.prototype, "users", void 0);
    return SetChannelPrivacyUsersRequestBody;
}(SpeakeasyBase));
export { SetChannelPrivacyUsersRequestBody };
var SetChannelPrivacyUsersSecurity = /** @class */ (function (_super) {
    __extends(SetChannelPrivacyUsersSecurity, _super);
    function SetChannelPrivacyUsersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SetChannelPrivacyUsersSecurity.prototype, "oauth2", void 0);
    return SetChannelPrivacyUsersSecurity;
}(SpeakeasyBase));
export { SetChannelPrivacyUsersSecurity };
var SetChannelPrivacyUsersRequest = /** @class */ (function (_super) {
    __extends(SetChannelPrivacyUsersRequest, _super);
    function SetChannelPrivacyUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetChannelPrivacyUsersPathParams)
    ], SetChannelPrivacyUsersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.user+json" }),
        __metadata("design:type", SetChannelPrivacyUsersRequestBody)
    ], SetChannelPrivacyUsersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetChannelPrivacyUsersSecurity)
    ], SetChannelPrivacyUsersRequest.prototype, "security", void 0);
    return SetChannelPrivacyUsersRequest;
}(SpeakeasyBase));
export { SetChannelPrivacyUsersRequest };
var SetChannelPrivacyUsersResponse = /** @class */ (function (_super) {
    __extends(SetChannelPrivacyUsersResponse, _super);
    function SetChannelPrivacyUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetChannelPrivacyUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetChannelPrivacyUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], SetChannelPrivacyUsersResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], SetChannelPrivacyUsersResponse.prototype, "users", void 0);
    return SetChannelPrivacyUsersResponse;
}(SpeakeasyBase));
export { SetChannelPrivacyUsersResponse };
