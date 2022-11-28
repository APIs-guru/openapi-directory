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
var DeleteWordsFromWordListPathParams = /** @class */ (function (_super) {
    __extends(DeleteWordsFromWordListPathParams, _super);
    function DeleteWordsFromWordListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permalink" }),
        __metadata("design:type", String)
    ], DeleteWordsFromWordListPathParams.prototype, "permalink", void 0);
    return DeleteWordsFromWordListPathParams;
}(SpeakeasyBase));
export { DeleteWordsFromWordListPathParams };
var DeleteWordsFromWordListHeaders = /** @class */ (function (_super) {
    __extends(DeleteWordsFromWordListHeaders, _super);
    function DeleteWordsFromWordListHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=auth_token" }),
        __metadata("design:type", String)
    ], DeleteWordsFromWordListHeaders.prototype, "authToken", void 0);
    return DeleteWordsFromWordListHeaders;
}(SpeakeasyBase));
export { DeleteWordsFromWordListHeaders };
var DeleteWordsFromWordListRequest = /** @class */ (function (_super) {
    __extends(DeleteWordsFromWordListRequest, _super);
    function DeleteWordsFromWordListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteWordsFromWordListPathParams)
    ], DeleteWordsFromWordListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteWordsFromWordListHeaders)
    ], DeleteWordsFromWordListRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Array)
    ], DeleteWordsFromWordListRequest.prototype, "request", void 0);
    return DeleteWordsFromWordListRequest;
}(SpeakeasyBase));
export { DeleteWordsFromWordListRequest };
var DeleteWordsFromWordListResponse = /** @class */ (function (_super) {
    __extends(DeleteWordsFromWordListResponse, _super);
    function DeleteWordsFromWordListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteWordsFromWordListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteWordsFromWordListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteWordsFromWordListResponse.prototype, "statusCode", void 0);
    return DeleteWordsFromWordListResponse;
}(SpeakeasyBase));
export { DeleteWordsFromWordListResponse };
