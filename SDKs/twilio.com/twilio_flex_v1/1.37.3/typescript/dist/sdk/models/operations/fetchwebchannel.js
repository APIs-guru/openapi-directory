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
export var FetchWebChannelServerList = [
    "https://flex-api.twilio.com",
];
var FetchWebChannelPathParams = /** @class */ (function (_super) {
    __extends(FetchWebChannelPathParams, _super);
    function FetchWebChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchWebChannelPathParams.prototype, "sid", void 0);
    return FetchWebChannelPathParams;
}(SpeakeasyBase));
export { FetchWebChannelPathParams };
var FetchWebChannelSecurity = /** @class */ (function (_super) {
    __extends(FetchWebChannelSecurity, _super);
    function FetchWebChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWebChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWebChannelSecurity;
}(SpeakeasyBase));
export { FetchWebChannelSecurity };
var FetchWebChannelRequest = /** @class */ (function (_super) {
    __extends(FetchWebChannelRequest, _super);
    function FetchWebChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWebChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWebChannelPathParams)
    ], FetchWebChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWebChannelSecurity)
    ], FetchWebChannelRequest.prototype, "security", void 0);
    return FetchWebChannelRequest;
}(SpeakeasyBase));
export { FetchWebChannelRequest };
var FetchWebChannelResponse = /** @class */ (function (_super) {
    __extends(FetchWebChannelResponse, _super);
    function FetchWebChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWebChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchWebChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FlexV1WebChannel)
    ], FetchWebChannelResponse.prototype, "flexV1WebChannel", void 0);
    return FetchWebChannelResponse;
}(SpeakeasyBase));
export { FetchWebChannelResponse };
