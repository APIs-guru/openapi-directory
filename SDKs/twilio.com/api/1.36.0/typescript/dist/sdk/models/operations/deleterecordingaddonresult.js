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
export var DELETERECORDINGADDONRESULT_SERVERS = [
    "https://api.twilio.com",
];
var DeleteRecordingAddOnResultPathParams = /** @class */ (function (_super) {
    __extends(DeleteRecordingAddOnResultPathParams, _super);
    function DeleteRecordingAddOnResultPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], DeleteRecordingAddOnResultPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ReferenceSid" }),
        __metadata("design:type", String)
    ], DeleteRecordingAddOnResultPathParams.prototype, "referenceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteRecordingAddOnResultPathParams.prototype, "sid", void 0);
    return DeleteRecordingAddOnResultPathParams;
}(SpeakeasyBase));
export { DeleteRecordingAddOnResultPathParams };
var DeleteRecordingAddOnResultSecurity = /** @class */ (function (_super) {
    __extends(DeleteRecordingAddOnResultSecurity, _super);
    function DeleteRecordingAddOnResultSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteRecordingAddOnResultSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteRecordingAddOnResultSecurity;
}(SpeakeasyBase));
export { DeleteRecordingAddOnResultSecurity };
var DeleteRecordingAddOnResultRequest = /** @class */ (function (_super) {
    __extends(DeleteRecordingAddOnResultRequest, _super);
    function DeleteRecordingAddOnResultRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteRecordingAddOnResultRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteRecordingAddOnResultPathParams)
    ], DeleteRecordingAddOnResultRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteRecordingAddOnResultSecurity)
    ], DeleteRecordingAddOnResultRequest.prototype, "security", void 0);
    return DeleteRecordingAddOnResultRequest;
}(SpeakeasyBase));
export { DeleteRecordingAddOnResultRequest };
var DeleteRecordingAddOnResultResponse = /** @class */ (function (_super) {
    __extends(DeleteRecordingAddOnResultResponse, _super);
    function DeleteRecordingAddOnResultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteRecordingAddOnResultResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteRecordingAddOnResultResponse.prototype, "statusCode", void 0);
    return DeleteRecordingAddOnResultResponse;
}(SpeakeasyBase));
export { DeleteRecordingAddOnResultResponse };
