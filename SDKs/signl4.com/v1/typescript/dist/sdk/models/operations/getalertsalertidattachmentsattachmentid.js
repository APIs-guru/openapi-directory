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
var GetAlertsAlertIdAttachmentsAttachmentIdPathParams = /** @class */ (function (_super) {
    __extends(GetAlertsAlertIdAttachmentsAttachmentIdPathParams, _super);
    function GetAlertsAlertIdAttachmentsAttachmentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" }),
        __metadata("design:type", String)
    ], GetAlertsAlertIdAttachmentsAttachmentIdPathParams.prototype, "alertId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachmentId" }),
        __metadata("design:type", String)
    ], GetAlertsAlertIdAttachmentsAttachmentIdPathParams.prototype, "attachmentId", void 0);
    return GetAlertsAlertIdAttachmentsAttachmentIdPathParams;
}(SpeakeasyBase));
export { GetAlertsAlertIdAttachmentsAttachmentIdPathParams };
var GetAlertsAlertIdAttachmentsAttachmentIdQueryParams = /** @class */ (function (_super) {
    __extends(GetAlertsAlertIdAttachmentsAttachmentIdQueryParams, _super);
    function GetAlertsAlertIdAttachmentsAttachmentIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], GetAlertsAlertIdAttachmentsAttachmentIdQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scale" }),
        __metadata("design:type", Boolean)
    ], GetAlertsAlertIdAttachmentsAttachmentIdQueryParams.prototype, "scale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], GetAlertsAlertIdAttachmentsAttachmentIdQueryParams.prototype, "width", void 0);
    return GetAlertsAlertIdAttachmentsAttachmentIdQueryParams;
}(SpeakeasyBase));
export { GetAlertsAlertIdAttachmentsAttachmentIdQueryParams };
var GetAlertsAlertIdAttachmentsAttachmentIdRequest = /** @class */ (function (_super) {
    __extends(GetAlertsAlertIdAttachmentsAttachmentIdRequest, _super);
    function GetAlertsAlertIdAttachmentsAttachmentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlertsAlertIdAttachmentsAttachmentIdPathParams)
    ], GetAlertsAlertIdAttachmentsAttachmentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlertsAlertIdAttachmentsAttachmentIdQueryParams)
    ], GetAlertsAlertIdAttachmentsAttachmentIdRequest.prototype, "queryParams", void 0);
    return GetAlertsAlertIdAttachmentsAttachmentIdRequest;
}(SpeakeasyBase));
export { GetAlertsAlertIdAttachmentsAttachmentIdRequest };
var GetAlertsAlertIdAttachmentsAttachmentIdResponse = /** @class */ (function (_super) {
    __extends(GetAlertsAlertIdAttachmentsAttachmentIdResponse, _super);
    function GetAlertsAlertIdAttachmentsAttachmentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAlertsAlertIdAttachmentsAttachmentIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAlertsAlertIdAttachmentsAttachmentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], GetAlertsAlertIdAttachmentsAttachmentIdResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAlertsAlertIdAttachmentsAttachmentIdResponse.prototype, "getAlertsAlertIdAttachmentsAttachmentId200ApplicationJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAlertsAlertIdAttachmentsAttachmentIdResponse.prototype, "getAlertsAlertIdAttachmentsAttachmentId200TextJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAlertsAlertIdAttachmentsAttachmentIdResponse.prototype, "getAlertsAlertIdAttachmentsAttachmentId200TextPlainBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAlertsAlertIdAttachmentsAttachmentIdResponse.prototype, "statusCode", void 0);
    return GetAlertsAlertIdAttachmentsAttachmentIdResponse;
}(SpeakeasyBase));
export { GetAlertsAlertIdAttachmentsAttachmentIdResponse };
