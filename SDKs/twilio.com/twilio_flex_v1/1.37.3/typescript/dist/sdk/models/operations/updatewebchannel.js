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
export var UpdateWebChannelServerList = [
    "https://flex-api.twilio.com",
];
var UpdateWebChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateWebChannelPathParams, _super);
    function UpdateWebChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateWebChannelPathParams.prototype, "sid", void 0);
    return UpdateWebChannelPathParams;
}(SpeakeasyBase));
export { UpdateWebChannelPathParams };
var UpdateWebChannelUpdateWebChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateWebChannelUpdateWebChannelRequest, _super);
    function UpdateWebChannelUpdateWebChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ChatStatus;" }),
        __metadata("design:type", String)
    ], UpdateWebChannelUpdateWebChannelRequest.prototype, "chatStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PostEngagementData;" }),
        __metadata("design:type", String)
    ], UpdateWebChannelUpdateWebChannelRequest.prototype, "postEngagementData", void 0);
    return UpdateWebChannelUpdateWebChannelRequest;
}(SpeakeasyBase));
export { UpdateWebChannelUpdateWebChannelRequest };
var UpdateWebChannelSecurity = /** @class */ (function (_super) {
    __extends(UpdateWebChannelSecurity, _super);
    function UpdateWebChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateWebChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateWebChannelSecurity;
}(SpeakeasyBase));
export { UpdateWebChannelSecurity };
var UpdateWebChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateWebChannelRequest, _super);
    function UpdateWebChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWebChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWebChannelPathParams)
    ], UpdateWebChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateWebChannelUpdateWebChannelRequest)
    ], UpdateWebChannelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWebChannelSecurity)
    ], UpdateWebChannelRequest.prototype, "security", void 0);
    return UpdateWebChannelRequest;
}(SpeakeasyBase));
export { UpdateWebChannelRequest };
var UpdateWebChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateWebChannelResponse, _super);
    function UpdateWebChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWebChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateWebChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FlexV1WebChannel)
    ], UpdateWebChannelResponse.prototype, "flexV1WebChannel", void 0);
    return UpdateWebChannelResponse;
}(SpeakeasyBase));
export { UpdateWebChannelResponse };
