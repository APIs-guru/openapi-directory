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
export var DELETEFIELDVALUE_SERVERS = [
    "https://autopilot.twilio.com",
];
var DeleteFieldValuePathParams = /** @class */ (function (_super) {
    __extends(DeleteFieldValuePathParams, _super);
    function DeleteFieldValuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], DeleteFieldValuePathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" }),
        __metadata("design:type", String)
    ], DeleteFieldValuePathParams.prototype, "fieldTypeSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteFieldValuePathParams.prototype, "sid", void 0);
    return DeleteFieldValuePathParams;
}(SpeakeasyBase));
export { DeleteFieldValuePathParams };
var DeleteFieldValueSecurity = /** @class */ (function (_super) {
    __extends(DeleteFieldValueSecurity, _super);
    function DeleteFieldValueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteFieldValueSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteFieldValueSecurity;
}(SpeakeasyBase));
export { DeleteFieldValueSecurity };
var DeleteFieldValueRequest = /** @class */ (function (_super) {
    __extends(DeleteFieldValueRequest, _super);
    function DeleteFieldValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteFieldValueRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFieldValuePathParams)
    ], DeleteFieldValueRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFieldValueSecurity)
    ], DeleteFieldValueRequest.prototype, "security", void 0);
    return DeleteFieldValueRequest;
}(SpeakeasyBase));
export { DeleteFieldValueRequest };
var DeleteFieldValueResponse = /** @class */ (function (_super) {
    __extends(DeleteFieldValueResponse, _super);
    function DeleteFieldValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteFieldValueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteFieldValueResponse.prototype, "statusCode", void 0);
    return DeleteFieldValueResponse;
}(SpeakeasyBase));
export { DeleteFieldValueResponse };
