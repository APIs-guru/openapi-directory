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
var PutAttachmentsIdPathParams = /** @class */ (function (_super) {
    __extends(PutAttachmentsIdPathParams, _super);
    function PutAttachmentsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutAttachmentsIdPathParams.prototype, "id", void 0);
    return PutAttachmentsIdPathParams;
}(SpeakeasyBase));
export { PutAttachmentsIdPathParams };
var PutAttachmentsIdRequestBody = /** @class */ (function (_super) {
    __extends(PutAttachmentsIdRequestBody, _super);
    function PutAttachmentsIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PutAttachmentsIdRequestBody.prototype, "title", void 0);
    return PutAttachmentsIdRequestBody;
}(SpeakeasyBase));
export { PutAttachmentsIdRequestBody };
var PutAttachmentsIdRequest = /** @class */ (function (_super) {
    __extends(PutAttachmentsIdRequest, _super);
    function PutAttachmentsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAttachmentsIdPathParams)
    ], PutAttachmentsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutAttachmentsIdRequestBody)
    ], PutAttachmentsIdRequest.prototype, "request", void 0);
    return PutAttachmentsIdRequest;
}(SpeakeasyBase));
export { PutAttachmentsIdRequest };
var PutAttachmentsIdResponse = /** @class */ (function (_super) {
    __extends(PutAttachmentsIdResponse, _super);
    function PutAttachmentsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Attachment)
    ], PutAttachmentsIdResponse.prototype, "attachment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutAttachmentsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PutAttachmentsIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutAttachmentsIdResponse.prototype, "statusCode", void 0);
    return PutAttachmentsIdResponse;
}(SpeakeasyBase));
export { PutAttachmentsIdResponse };
