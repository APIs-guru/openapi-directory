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
export var FETCHCUSTOMERPROFILEEVALUATION_SERVERS = [
    "https://trusthub.twilio.com",
];
var FetchCustomerProfileEvaluationPathParams = /** @class */ (function (_super) {
    __extends(FetchCustomerProfileEvaluationPathParams, _super);
    function FetchCustomerProfileEvaluationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" }),
        __metadata("design:type", String)
    ], FetchCustomerProfileEvaluationPathParams.prototype, "customerProfileSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchCustomerProfileEvaluationPathParams.prototype, "sid", void 0);
    return FetchCustomerProfileEvaluationPathParams;
}(SpeakeasyBase));
export { FetchCustomerProfileEvaluationPathParams };
var FetchCustomerProfileEvaluationSecurity = /** @class */ (function (_super) {
    __extends(FetchCustomerProfileEvaluationSecurity, _super);
    function FetchCustomerProfileEvaluationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchCustomerProfileEvaluationSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchCustomerProfileEvaluationSecurity;
}(SpeakeasyBase));
export { FetchCustomerProfileEvaluationSecurity };
var FetchCustomerProfileEvaluationRequest = /** @class */ (function (_super) {
    __extends(FetchCustomerProfileEvaluationRequest, _super);
    function FetchCustomerProfileEvaluationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchCustomerProfileEvaluationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchCustomerProfileEvaluationPathParams)
    ], FetchCustomerProfileEvaluationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchCustomerProfileEvaluationSecurity)
    ], FetchCustomerProfileEvaluationRequest.prototype, "security", void 0);
    return FetchCustomerProfileEvaluationRequest;
}(SpeakeasyBase));
export { FetchCustomerProfileEvaluationRequest };
var FetchCustomerProfileEvaluationResponse = /** @class */ (function (_super) {
    __extends(FetchCustomerProfileEvaluationResponse, _super);
    function FetchCustomerProfileEvaluationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchCustomerProfileEvaluationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchCustomerProfileEvaluationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrusthubV1CustomerProfileCustomerProfileEvaluation)
    ], FetchCustomerProfileEvaluationResponse.prototype, "trusthubV1CustomerProfileCustomerProfileEvaluation", void 0);
    return FetchCustomerProfileEvaluationResponse;
}(SpeakeasyBase));
export { FetchCustomerProfileEvaluationResponse };
