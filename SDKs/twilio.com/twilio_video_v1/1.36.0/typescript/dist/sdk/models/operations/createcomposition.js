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
export var CREATECOMPOSITION_SERVERS = [
    "https://video.twilio.com",
];
export var CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum;
(function (CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum) {
    CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum || (CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum = {}));
var CreateCompositionCreateCompositionRequest = /** @class */ (function (_super) {
    __extends(CreateCompositionCreateCompositionRequest, _super);
    function CreateCompositionCreateCompositionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AudioSources;" }),
        __metadata("design:type", Array)
    ], CreateCompositionCreateCompositionRequest.prototype, "audioSources", void 0);
    __decorate([
        Metadata({ data: "form, name=AudioSourcesExcluded;" }),
        __metadata("design:type", Array)
    ], CreateCompositionCreateCompositionRequest.prototype, "audioSourcesExcluded", void 0);
    __decorate([
        Metadata({ data: "form, name=Format;" }),
        __metadata("design:type", String)
    ], CreateCompositionCreateCompositionRequest.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "form, name=Resolution;" }),
        __metadata("design:type", String)
    ], CreateCompositionCreateCompositionRequest.prototype, "resolution", void 0);
    __decorate([
        Metadata({ data: "form, name=RoomSid;" }),
        __metadata("design:type", String)
    ], CreateCompositionCreateCompositionRequest.prototype, "roomSid", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateCompositionCreateCompositionRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateCompositionCreateCompositionRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=Trim;" }),
        __metadata("design:type", Boolean)
    ], CreateCompositionCreateCompositionRequest.prototype, "trim", void 0);
    __decorate([
        Metadata({ data: "form, name=VideoLayout;" }),
        __metadata("design:type", Object)
    ], CreateCompositionCreateCompositionRequest.prototype, "videoLayout", void 0);
    return CreateCompositionCreateCompositionRequest;
}(SpeakeasyBase));
export { CreateCompositionCreateCompositionRequest };
var CreateCompositionSecurity = /** @class */ (function (_super) {
    __extends(CreateCompositionSecurity, _super);
    function CreateCompositionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateCompositionSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateCompositionSecurity;
}(SpeakeasyBase));
export { CreateCompositionSecurity };
var CreateCompositionRequest = /** @class */ (function (_super) {
    __extends(CreateCompositionRequest, _super);
    function CreateCompositionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCompositionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCompositionCreateCompositionRequest)
    ], CreateCompositionRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateCompositionSecurity)
    ], CreateCompositionRequest.prototype, "security", void 0);
    return CreateCompositionRequest;
}(SpeakeasyBase));
export { CreateCompositionRequest };
var CreateCompositionResponse = /** @class */ (function (_super) {
    __extends(CreateCompositionResponse, _super);
    function CreateCompositionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCompositionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateCompositionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VideoV1Composition)
    ], CreateCompositionResponse.prototype, "videoV1Composition", void 0);
    return CreateCompositionResponse;
}(SpeakeasyBase));
export { CreateCompositionResponse };
