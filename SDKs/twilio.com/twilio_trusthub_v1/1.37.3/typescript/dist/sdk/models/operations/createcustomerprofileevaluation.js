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
export var CreateCustomerProfileEvaluationServerList = [
    "https://trusthub.twilio.com",
];
var CreateCustomerProfileEvaluationPathParams = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileEvaluationPathParams, _super);
    function CreateCustomerProfileEvaluationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" }),
        __metadata("design:type", String)
    ], CreateCustomerProfileEvaluationPathParams.prototype, "customerProfileSid", void 0);
    return CreateCustomerProfileEvaluationPathParams;
}(SpeakeasyBase));
export { CreateCustomerProfileEvaluationPathParams };
var CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest, _super);
    function CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PolicySid;" }),
        __metadata("design:type", String)
    ], CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest.prototype, "policySid", void 0);
    return CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest;
}(SpeakeasyBase));
export { CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest };
var CreateCustomerProfileEvaluationSecurity = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileEvaluationSecurity, _super);
    function CreateCustomerProfileEvaluationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateCustomerProfileEvaluationSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateCustomerProfileEvaluationSecurity;
}(SpeakeasyBase));
export { CreateCustomerProfileEvaluationSecurity };
var CreateCustomerProfileEvaluationRequest = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileEvaluationRequest, _super);
    function CreateCustomerProfileEvaluationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCustomerProfileEvaluationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomerProfileEvaluationPathParams)
    ], CreateCustomerProfileEvaluationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest)
    ], CreateCustomerProfileEvaluationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomerProfileEvaluationSecurity)
    ], CreateCustomerProfileEvaluationRequest.prototype, "security", void 0);
    return CreateCustomerProfileEvaluationRequest;
}(SpeakeasyBase));
export { CreateCustomerProfileEvaluationRequest };
var CreateCustomerProfileEvaluationResponse = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileEvaluationResponse, _super);
    function CreateCustomerProfileEvaluationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCustomerProfileEvaluationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCustomerProfileEvaluationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrusthubV1CustomerProfileCustomerProfileEvaluation)
    ], CreateCustomerProfileEvaluationResponse.prototype, "trusthubV1CustomerProfileCustomerProfileEvaluation", void 0);
    return CreateCustomerProfileEvaluationResponse;
}(SpeakeasyBase));
export { CreateCustomerProfileEvaluationResponse };
