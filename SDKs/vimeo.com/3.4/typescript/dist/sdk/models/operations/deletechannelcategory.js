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
var DeleteChannelCategoryPathParams = /** @class */ (function (_super) {
    __extends(DeleteChannelCategoryPathParams, _super);
    function DeleteChannelCategoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" }),
        __metadata("design:type", String)
    ], DeleteChannelCategoryPathParams.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], DeleteChannelCategoryPathParams.prototype, "channelId", void 0);
    return DeleteChannelCategoryPathParams;
}(SpeakeasyBase));
export { DeleteChannelCategoryPathParams };
var DeleteChannelCategorySecurity = /** @class */ (function (_super) {
    __extends(DeleteChannelCategorySecurity, _super);
    function DeleteChannelCategorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteChannelCategorySecurity.prototype, "oauth2", void 0);
    return DeleteChannelCategorySecurity;
}(SpeakeasyBase));
export { DeleteChannelCategorySecurity };
var DeleteChannelCategoryRequest = /** @class */ (function (_super) {
    __extends(DeleteChannelCategoryRequest, _super);
    function DeleteChannelCategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChannelCategoryPathParams)
    ], DeleteChannelCategoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChannelCategorySecurity)
    ], DeleteChannelCategoryRequest.prototype, "security", void 0);
    return DeleteChannelCategoryRequest;
}(SpeakeasyBase));
export { DeleteChannelCategoryRequest };
var DeleteChannelCategoryResponse = /** @class */ (function (_super) {
    __extends(DeleteChannelCategoryResponse, _super);
    function DeleteChannelCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteChannelCategoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteChannelCategoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], DeleteChannelCategoryResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], DeleteChannelCategoryResponse.prototype, "legacyError", void 0);
    return DeleteChannelCategoryResponse;
}(SpeakeasyBase));
export { DeleteChannelCategoryResponse };
