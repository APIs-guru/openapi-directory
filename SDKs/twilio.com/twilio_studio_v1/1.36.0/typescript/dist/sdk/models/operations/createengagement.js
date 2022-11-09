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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var CREATEENGAGEMENT_SERVERS = [
    "https://studio.twilio.com",
];
var CreateEngagementPathParams = /** @class */ (function (_super) {
    __extends(CreateEngagementPathParams, _super);
    function CreateEngagementPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], CreateEngagementPathParams.prototype, "flowSid", void 0);
    return CreateEngagementPathParams;
}(SpeakeasyBase));
export { CreateEngagementPathParams };
var CreateEngagementCreateEngagementRequest = /** @class */ (function (_super) {
    __extends(CreateEngagementCreateEngagementRequest, _super);
    function CreateEngagementCreateEngagementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=From;" }),
        __metadata("design:type", String)
    ], CreateEngagementCreateEngagementRequest.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "form, name=Parameters;" }),
        __metadata("design:type", Object)
    ], CreateEngagementCreateEngagementRequest.prototype, "parameters", void 0);
    __decorate([
        Metadata({ data: "form, name=To;" }),
        __metadata("design:type", String)
    ], CreateEngagementCreateEngagementRequest.prototype, "to", void 0);
    return CreateEngagementCreateEngagementRequest;
}(SpeakeasyBase));
export { CreateEngagementCreateEngagementRequest };
var CreateEngagementSecurity = /** @class */ (function (_super) {
    __extends(CreateEngagementSecurity, _super);
    function CreateEngagementSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateEngagementSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateEngagementSecurity;
}(SpeakeasyBase));
export { CreateEngagementSecurity };
var CreateEngagementRequest = /** @class */ (function (_super) {
    __extends(CreateEngagementRequest, _super);
    function CreateEngagementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateEngagementRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateEngagementPathParams)
    ], CreateEngagementRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateEngagementCreateEngagementRequest)
    ], CreateEngagementRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateEngagementSecurity)
    ], CreateEngagementRequest.prototype, "security", void 0);
    return CreateEngagementRequest;
}(SpeakeasyBase));
export { CreateEngagementRequest };
var CreateEngagementResponse = /** @class */ (function (_super) {
    __extends(CreateEngagementResponse, _super);
    function CreateEngagementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateEngagementResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateEngagementResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StudioV1FlowEngagement)
    ], CreateEngagementResponse.prototype, "studioV1FlowEngagement", void 0);
    return CreateEngagementResponse;
}(SpeakeasyBase));
export { CreateEngagementResponse };
