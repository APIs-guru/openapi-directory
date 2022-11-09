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
export var CREATECHALLENGE_SERVERS = [
    "https://verify.twilio.com",
];
var CreateChallengePathParams = /** @class */ (function (_super) {
    __extends(CreateChallengePathParams, _super);
    function CreateChallengePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], CreateChallengePathParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateChallengePathParams.prototype, "serviceSid", void 0);
    return CreateChallengePathParams;
}(SpeakeasyBase));
export { CreateChallengePathParams };
var CreateChallengeCreateChallengeRequest = /** @class */ (function (_super) {
    __extends(CreateChallengeCreateChallengeRequest, _super);
    function CreateChallengeCreateChallengeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AuthPayload;" }),
        __metadata("design:type", String)
    ], CreateChallengeCreateChallengeRequest.prototype, "authPayload", void 0);
    __decorate([
        Metadata({ data: "form, name=Details.Fields;" }),
        __metadata("design:type", Array)
    ], CreateChallengeCreateChallengeRequest.prototype, "detailsFields", void 0);
    __decorate([
        Metadata({ data: "form, name=Details.Message;" }),
        __metadata("design:type", String)
    ], CreateChallengeCreateChallengeRequest.prototype, "detailsMessage", void 0);
    __decorate([
        Metadata({ data: "form, name=ExpirationDate;" }),
        __metadata("design:type", Date)
    ], CreateChallengeCreateChallengeRequest.prototype, "expirationDate", void 0);
    __decorate([
        Metadata({ data: "form, name=FactorSid;" }),
        __metadata("design:type", String)
    ], CreateChallengeCreateChallengeRequest.prototype, "factorSid", void 0);
    __decorate([
        Metadata({ data: "form, name=HiddenDetails;" }),
        __metadata("design:type", Object)
    ], CreateChallengeCreateChallengeRequest.prototype, "hiddenDetails", void 0);
    return CreateChallengeCreateChallengeRequest;
}(SpeakeasyBase));
export { CreateChallengeCreateChallengeRequest };
var CreateChallengeSecurity = /** @class */ (function (_super) {
    __extends(CreateChallengeSecurity, _super);
    function CreateChallengeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateChallengeSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateChallengeSecurity;
}(SpeakeasyBase));
export { CreateChallengeSecurity };
var CreateChallengeRequest = /** @class */ (function (_super) {
    __extends(CreateChallengeRequest, _super);
    function CreateChallengeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateChallengeRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateChallengePathParams)
    ], CreateChallengeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateChallengeCreateChallengeRequest)
    ], CreateChallengeRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateChallengeSecurity)
    ], CreateChallengeRequest.prototype, "security", void 0);
    return CreateChallengeRequest;
}(SpeakeasyBase));
export { CreateChallengeRequest };
var CreateChallengeResponse = /** @class */ (function (_super) {
    __extends(CreateChallengeResponse, _super);
    function CreateChallengeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateChallengeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateChallengeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VerifyV2ServiceEntityChallenge)
    ], CreateChallengeResponse.prototype, "verifyV2ServiceEntityChallenge", void 0);
    return CreateChallengeResponse;
}(SpeakeasyBase));
export { CreateChallengeResponse };
