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
export var UPDATEMEMBER_SERVERS = [
    "https://api.twilio.com",
];
var UpdateMemberPathParams = /** @class */ (function (_super) {
    __extends(UpdateMemberPathParams, _super);
    function UpdateMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateMemberPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], UpdateMemberPathParams.prototype, "callSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=QueueSid" }),
        __metadata("design:type", String)
    ], UpdateMemberPathParams.prototype, "queueSid", void 0);
    return UpdateMemberPathParams;
}(SpeakeasyBase));
export { UpdateMemberPathParams };
export var UpdateMemberUpdateMemberRequestMethodEnum;
(function (UpdateMemberUpdateMemberRequestMethodEnum) {
    UpdateMemberUpdateMemberRequestMethodEnum["Head"] = "HEAD";
    UpdateMemberUpdateMemberRequestMethodEnum["Get"] = "GET";
    UpdateMemberUpdateMemberRequestMethodEnum["Post"] = "POST";
    UpdateMemberUpdateMemberRequestMethodEnum["Patch"] = "PATCH";
    UpdateMemberUpdateMemberRequestMethodEnum["Put"] = "PUT";
    UpdateMemberUpdateMemberRequestMethodEnum["Delete"] = "DELETE";
})(UpdateMemberUpdateMemberRequestMethodEnum || (UpdateMemberUpdateMemberRequestMethodEnum = {}));
var UpdateMemberUpdateMemberRequest = /** @class */ (function (_super) {
    __extends(UpdateMemberUpdateMemberRequest, _super);
    function UpdateMemberUpdateMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Method;" }),
        __metadata("design:type", String)
    ], UpdateMemberUpdateMemberRequest.prototype, "method", void 0);
    __decorate([
        Metadata({ data: "form, name=Url;" }),
        __metadata("design:type", String)
    ], UpdateMemberUpdateMemberRequest.prototype, "url", void 0);
    return UpdateMemberUpdateMemberRequest;
}(SpeakeasyBase));
export { UpdateMemberUpdateMemberRequest };
var UpdateMemberSecurity = /** @class */ (function (_super) {
    __extends(UpdateMemberSecurity, _super);
    function UpdateMemberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateMemberSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateMemberSecurity;
}(SpeakeasyBase));
export { UpdateMemberSecurity };
var UpdateMemberRequest = /** @class */ (function (_super) {
    __extends(UpdateMemberRequest, _super);
    function UpdateMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateMemberRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateMemberPathParams)
    ], UpdateMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateMemberUpdateMemberRequest)
    ], UpdateMemberRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateMemberSecurity)
    ], UpdateMemberRequest.prototype, "security", void 0);
    return UpdateMemberRequest;
}(SpeakeasyBase));
export { UpdateMemberRequest };
var UpdateMemberResponse = /** @class */ (function (_super) {
    __extends(UpdateMemberResponse, _super);
    function UpdateMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateMemberResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateMemberResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountQueueMember)
    ], UpdateMemberResponse.prototype, "apiV2010AccountQueueMember", void 0);
    return UpdateMemberResponse;
}(SpeakeasyBase));
export { UpdateMemberResponse };
