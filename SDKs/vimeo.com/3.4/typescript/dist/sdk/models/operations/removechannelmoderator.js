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
var RemoveChannelModeratorPathParams = /** @class */ (function (_super) {
    __extends(RemoveChannelModeratorPathParams, _super);
    function RemoveChannelModeratorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], RemoveChannelModeratorPathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], RemoveChannelModeratorPathParams.prototype, "userId", void 0);
    return RemoveChannelModeratorPathParams;
}(SpeakeasyBase));
export { RemoveChannelModeratorPathParams };
var RemoveChannelModeratorSecurity = /** @class */ (function (_super) {
    __extends(RemoveChannelModeratorSecurity, _super);
    function RemoveChannelModeratorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RemoveChannelModeratorSecurity.prototype, "oauth2", void 0);
    return RemoveChannelModeratorSecurity;
}(SpeakeasyBase));
export { RemoveChannelModeratorSecurity };
var RemoveChannelModeratorRequest = /** @class */ (function (_super) {
    __extends(RemoveChannelModeratorRequest, _super);
    function RemoveChannelModeratorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveChannelModeratorPathParams)
    ], RemoveChannelModeratorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveChannelModeratorSecurity)
    ], RemoveChannelModeratorRequest.prototype, "security", void 0);
    return RemoveChannelModeratorRequest;
}(SpeakeasyBase));
export { RemoveChannelModeratorRequest };
var RemoveChannelModeratorResponse = /** @class */ (function (_super) {
    __extends(RemoveChannelModeratorResponse, _super);
    function RemoveChannelModeratorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveChannelModeratorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveChannelModeratorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], RemoveChannelModeratorResponse.prototype, "legacyError", void 0);
    return RemoveChannelModeratorResponse;
}(SpeakeasyBase));
export { RemoveChannelModeratorResponse };
