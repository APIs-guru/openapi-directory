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
export var CREATETRUSTPRODUCTEVALUATION_SERVERS = [
    "https://trusthub.twilio.com",
];
var CreateTrustProductEvaluationPathParams = /** @class */ (function (_super) {
    __extends(CreateTrustProductEvaluationPathParams, _super);
    function CreateTrustProductEvaluationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" }),
        __metadata("design:type", String)
    ], CreateTrustProductEvaluationPathParams.prototype, "trustProductSid", void 0);
    return CreateTrustProductEvaluationPathParams;
}(SpeakeasyBase));
export { CreateTrustProductEvaluationPathParams };
var CreateTrustProductEvaluationCreateTrustProductEvaluationRequest = /** @class */ (function (_super) {
    __extends(CreateTrustProductEvaluationCreateTrustProductEvaluationRequest, _super);
    function CreateTrustProductEvaluationCreateTrustProductEvaluationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=PolicySid;" }),
        __metadata("design:type", String)
    ], CreateTrustProductEvaluationCreateTrustProductEvaluationRequest.prototype, "policySid", void 0);
    return CreateTrustProductEvaluationCreateTrustProductEvaluationRequest;
}(SpeakeasyBase));
export { CreateTrustProductEvaluationCreateTrustProductEvaluationRequest };
var CreateTrustProductEvaluationSecurity = /** @class */ (function (_super) {
    __extends(CreateTrustProductEvaluationSecurity, _super);
    function CreateTrustProductEvaluationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateTrustProductEvaluationSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateTrustProductEvaluationSecurity;
}(SpeakeasyBase));
export { CreateTrustProductEvaluationSecurity };
var CreateTrustProductEvaluationRequest = /** @class */ (function (_super) {
    __extends(CreateTrustProductEvaluationRequest, _super);
    function CreateTrustProductEvaluationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTrustProductEvaluationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTrustProductEvaluationPathParams)
    ], CreateTrustProductEvaluationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTrustProductEvaluationCreateTrustProductEvaluationRequest)
    ], CreateTrustProductEvaluationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTrustProductEvaluationSecurity)
    ], CreateTrustProductEvaluationRequest.prototype, "security", void 0);
    return CreateTrustProductEvaluationRequest;
}(SpeakeasyBase));
export { CreateTrustProductEvaluationRequest };
var CreateTrustProductEvaluationResponse = /** @class */ (function (_super) {
    __extends(CreateTrustProductEvaluationResponse, _super);
    function CreateTrustProductEvaluationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTrustProductEvaluationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateTrustProductEvaluationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrusthubV1TrustProductTrustProductEvaluation)
    ], CreateTrustProductEvaluationResponse.prototype, "trusthubV1TrustProductTrustProductEvaluation", void 0);
    return CreateTrustProductEvaluationResponse;
}(SpeakeasyBase));
export { CreateTrustProductEvaluationResponse };
