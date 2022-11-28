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
var SubmitPayoutV3MultipartFormData = /** @class */ (function (_super) {
    __extends(SubmitPayoutV3MultipartFormData, _super);
    function SubmitPayoutV3MultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file;json=true", elemType: shared.PaymentInstructionV3 }),
        __metadata("design:type", Array)
    ], SubmitPayoutV3MultipartFormData.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=payorId" }),
        __metadata("design:type", String)
    ], SubmitPayoutV3MultipartFormData.prototype, "payorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=payoutFromPayorId" }),
        __metadata("design:type", String)
    ], SubmitPayoutV3MultipartFormData.prototype, "payoutFromPayorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=payoutToPayorId" }),
        __metadata("design:type", String)
    ], SubmitPayoutV3MultipartFormData.prototype, "payoutToPayorId", void 0);
    return SubmitPayoutV3MultipartFormData;
}(SpeakeasyBase));
export { SubmitPayoutV3MultipartFormData };
var SubmitPayoutV3Requests = /** @class */ (function (_super) {
    __extends(SubmitPayoutV3Requests, _super);
    function SubmitPayoutV3Requests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreatePayoutRequestV3)
    ], SubmitPayoutV3Requests.prototype, "createPayoutRequestV3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", SubmitPayoutV3MultipartFormData)
    ], SubmitPayoutV3Requests.prototype, "object", void 0);
    return SubmitPayoutV3Requests;
}(SpeakeasyBase));
export { SubmitPayoutV3Requests };
var SubmitPayoutV3Request = /** @class */ (function (_super) {
    __extends(SubmitPayoutV3Request, _super);
    function SubmitPayoutV3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubmitPayoutV3Requests)
    ], SubmitPayoutV3Request.prototype, "request", void 0);
    return SubmitPayoutV3Request;
}(SpeakeasyBase));
export { SubmitPayoutV3Request };
var SubmitPayoutV3Response = /** @class */ (function (_super) {
    __extends(SubmitPayoutV3Response, _super);
    function SubmitPayoutV3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SubmitPayoutV3Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], SubmitPayoutV3Response.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SubmitPayoutV3Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubmitPayoutV3Response.prototype, "inlineResponse400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubmitPayoutV3Response.prototype, "inlineResponse401", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubmitPayoutV3Response.prototype, "inlineResponse403", void 0);
    return SubmitPayoutV3Response;
}(SpeakeasyBase));
export { SubmitPayoutV3Response };
