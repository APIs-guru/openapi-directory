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
export var FETCHTRUSTPRODUCTENTITYASSIGNMENT_SERVERS = [
    "https://trusthub.twilio.com",
];
var FetchTrustProductEntityAssignmentPathParams = /** @class */ (function (_super) {
    __extends(FetchTrustProductEntityAssignmentPathParams, _super);
    function FetchTrustProductEntityAssignmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchTrustProductEntityAssignmentPathParams.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" }),
        __metadata("design:type", String)
    ], FetchTrustProductEntityAssignmentPathParams.prototype, "trustProductSid", void 0);
    return FetchTrustProductEntityAssignmentPathParams;
}(SpeakeasyBase));
export { FetchTrustProductEntityAssignmentPathParams };
var FetchTrustProductEntityAssignmentSecurity = /** @class */ (function (_super) {
    __extends(FetchTrustProductEntityAssignmentSecurity, _super);
    function FetchTrustProductEntityAssignmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTrustProductEntityAssignmentSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTrustProductEntityAssignmentSecurity;
}(SpeakeasyBase));
export { FetchTrustProductEntityAssignmentSecurity };
var FetchTrustProductEntityAssignmentRequest = /** @class */ (function (_super) {
    __extends(FetchTrustProductEntityAssignmentRequest, _super);
    function FetchTrustProductEntityAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchTrustProductEntityAssignmentRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchTrustProductEntityAssignmentPathParams)
    ], FetchTrustProductEntityAssignmentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchTrustProductEntityAssignmentSecurity)
    ], FetchTrustProductEntityAssignmentRequest.prototype, "security", void 0);
    return FetchTrustProductEntityAssignmentRequest;
}(SpeakeasyBase));
export { FetchTrustProductEntityAssignmentRequest };
var FetchTrustProductEntityAssignmentResponse = /** @class */ (function (_super) {
    __extends(FetchTrustProductEntityAssignmentResponse, _super);
    function FetchTrustProductEntityAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchTrustProductEntityAssignmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchTrustProductEntityAssignmentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrusthubV1TrustProductTrustProductEntityAssignment)
    ], FetchTrustProductEntityAssignmentResponse.prototype, "trusthubV1TrustProductTrustProductEntityAssignment", void 0);
    return FetchTrustProductEntityAssignmentResponse;
}(SpeakeasyBase));
export { FetchTrustProductEntityAssignmentResponse };
