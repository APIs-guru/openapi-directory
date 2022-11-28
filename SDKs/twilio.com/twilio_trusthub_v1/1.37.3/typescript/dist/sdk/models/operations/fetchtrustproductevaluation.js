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
export var FetchTrustProductEvaluationServerList = [
    "https://trusthub.twilio.com",
];
var FetchTrustProductEvaluationPathParams = /** @class */ (function (_super) {
    __extends(FetchTrustProductEvaluationPathParams, _super);
    function FetchTrustProductEvaluationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchTrustProductEvaluationPathParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" }),
        __metadata("design:type", String)
    ], FetchTrustProductEvaluationPathParams.prototype, "trustProductSid", void 0);
    return FetchTrustProductEvaluationPathParams;
}(SpeakeasyBase));
export { FetchTrustProductEvaluationPathParams };
var FetchTrustProductEvaluationSecurity = /** @class */ (function (_super) {
    __extends(FetchTrustProductEvaluationSecurity, _super);
    function FetchTrustProductEvaluationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTrustProductEvaluationSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTrustProductEvaluationSecurity;
}(SpeakeasyBase));
export { FetchTrustProductEvaluationSecurity };
var FetchTrustProductEvaluationRequest = /** @class */ (function (_super) {
    __extends(FetchTrustProductEvaluationRequest, _super);
    function FetchTrustProductEvaluationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTrustProductEvaluationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTrustProductEvaluationPathParams)
    ], FetchTrustProductEvaluationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTrustProductEvaluationSecurity)
    ], FetchTrustProductEvaluationRequest.prototype, "security", void 0);
    return FetchTrustProductEvaluationRequest;
}(SpeakeasyBase));
export { FetchTrustProductEvaluationRequest };
var FetchTrustProductEvaluationResponse = /** @class */ (function (_super) {
    __extends(FetchTrustProductEvaluationResponse, _super);
    function FetchTrustProductEvaluationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTrustProductEvaluationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchTrustProductEvaluationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrusthubV1TrustProductTrustProductEvaluation)
    ], FetchTrustProductEvaluationResponse.prototype, "trusthubV1TrustProductTrustProductEvaluation", void 0);
    return FetchTrustProductEvaluationResponse;
}(SpeakeasyBase));
export { FetchTrustProductEvaluationResponse };
