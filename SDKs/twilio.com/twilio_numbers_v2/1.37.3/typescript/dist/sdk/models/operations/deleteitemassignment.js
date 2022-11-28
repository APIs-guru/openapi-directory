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
export var DeleteItemAssignmentServerList = [
    "https://numbers.twilio.com",
];
var DeleteItemAssignmentPathParams = /** @class */ (function (_super) {
    __extends(DeleteItemAssignmentPathParams, _super);
    function DeleteItemAssignmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" }),
        __metadata("design:type", String)
    ], DeleteItemAssignmentPathParams.prototype, "bundleSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteItemAssignmentPathParams.prototype, "sid", void 0);
    return DeleteItemAssignmentPathParams;
}(SpeakeasyBase));
export { DeleteItemAssignmentPathParams };
var DeleteItemAssignmentSecurity = /** @class */ (function (_super) {
    __extends(DeleteItemAssignmentSecurity, _super);
    function DeleteItemAssignmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteItemAssignmentSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteItemAssignmentSecurity;
}(SpeakeasyBase));
export { DeleteItemAssignmentSecurity };
var DeleteItemAssignmentRequest = /** @class */ (function (_super) {
    __extends(DeleteItemAssignmentRequest, _super);
    function DeleteItemAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteItemAssignmentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteItemAssignmentPathParams)
    ], DeleteItemAssignmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteItemAssignmentSecurity)
    ], DeleteItemAssignmentRequest.prototype, "security", void 0);
    return DeleteItemAssignmentRequest;
}(SpeakeasyBase));
export { DeleteItemAssignmentRequest };
var DeleteItemAssignmentResponse = /** @class */ (function (_super) {
    __extends(DeleteItemAssignmentResponse, _super);
    function DeleteItemAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteItemAssignmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteItemAssignmentResponse.prototype, "statusCode", void 0);
    return DeleteItemAssignmentResponse;
}(SpeakeasyBase));
export { DeleteItemAssignmentResponse };
