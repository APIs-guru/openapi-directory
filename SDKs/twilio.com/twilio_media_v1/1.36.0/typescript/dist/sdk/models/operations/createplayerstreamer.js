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
export var CREATEPLAYERSTREAMER_SERVERS = [
    "https://media.twilio.com",
];
export var CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum;
(function (CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum) {
    CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum || (CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum = {}));
var CreatePlayerStreamerCreatePlayerStreamerRequest = /** @class */ (function (_super) {
    __extends(CreatePlayerStreamerCreatePlayerStreamerRequest, _super);
    function CreatePlayerStreamerCreatePlayerStreamerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=MaxDuration;" }),
        __metadata("design:type", Number)
    ], CreatePlayerStreamerCreatePlayerStreamerRequest.prototype, "maxDuration", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreatePlayerStreamerCreatePlayerStreamerRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreatePlayerStreamerCreatePlayerStreamerRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=Video;" }),
        __metadata("design:type", Boolean)
    ], CreatePlayerStreamerCreatePlayerStreamerRequest.prototype, "video", void 0);
    return CreatePlayerStreamerCreatePlayerStreamerRequest;
}(SpeakeasyBase));
export { CreatePlayerStreamerCreatePlayerStreamerRequest };
var CreatePlayerStreamerSecurity = /** @class */ (function (_super) {
    __extends(CreatePlayerStreamerSecurity, _super);
    function CreatePlayerStreamerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreatePlayerStreamerSecurity.prototype, "accountSidAuthToken", void 0);
    return CreatePlayerStreamerSecurity;
}(SpeakeasyBase));
export { CreatePlayerStreamerSecurity };
var CreatePlayerStreamerRequest = /** @class */ (function (_super) {
    __extends(CreatePlayerStreamerRequest, _super);
    function CreatePlayerStreamerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreatePlayerStreamerRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreatePlayerStreamerCreatePlayerStreamerRequest)
    ], CreatePlayerStreamerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreatePlayerStreamerSecurity)
    ], CreatePlayerStreamerRequest.prototype, "security", void 0);
    return CreatePlayerStreamerRequest;
}(SpeakeasyBase));
export { CreatePlayerStreamerRequest };
var CreatePlayerStreamerResponse = /** @class */ (function (_super) {
    __extends(CreatePlayerStreamerResponse, _super);
    function CreatePlayerStreamerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreatePlayerStreamerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreatePlayerStreamerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MediaV1PlayerStreamer)
    ], CreatePlayerStreamerResponse.prototype, "mediaV1PlayerStreamer", void 0);
    return CreatePlayerStreamerResponse;
}(SpeakeasyBase));
export { CreatePlayerStreamerResponse };
