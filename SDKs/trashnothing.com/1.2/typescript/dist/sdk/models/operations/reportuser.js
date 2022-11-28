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
var ReportUserRequestBody = /** @class */ (function (_super) {
    __extends(ReportUserRequestBody, _super);
    function ReportUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=group_id" }),
        __metadata("design:type", String)
    ], ReportUserRequestBody.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=message" }),
        __metadata("design:type", String)
    ], ReportUserRequestBody.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=subject" }),
        __metadata("design:type", String)
    ], ReportUserRequestBody.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_email" }),
        __metadata("design:type", String)
    ], ReportUserRequestBody.prototype, "userEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_id" }),
        __metadata("design:type", String)
    ], ReportUserRequestBody.prototype, "userId", void 0);
    return ReportUserRequestBody;
}(SpeakeasyBase));
export { ReportUserRequestBody };
var ReportUserRequest = /** @class */ (function (_super) {
    __extends(ReportUserRequest, _super);
    function ReportUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ReportUserRequestBody)
    ], ReportUserRequest.prototype, "request", void 0);
    return ReportUserRequest;
}(SpeakeasyBase));
export { ReportUserRequest };
var ReportUserResponse = /** @class */ (function (_super) {
    __extends(ReportUserResponse, _super);
    function ReportUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReportUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReportUserResponse.prototype, "statusCode", void 0);
    return ReportUserResponse;
}(SpeakeasyBase));
export { ReportUserResponse };
