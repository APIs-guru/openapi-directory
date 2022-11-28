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
var FolderSettingsPostPathParams = /** @class */ (function (_super) {
    __extends(FolderSettingsPostPathParams, _super);
    function FolderSettingsPostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], FolderSettingsPostPathParams.prototype, "id", void 0);
    return FolderSettingsPostPathParams;
}(SpeakeasyBase));
export { FolderSettingsPostPathParams };
var FolderSettingsPostRequests = /** @class */ (function (_super) {
    __extends(FolderSettingsPostRequests, _super);
    function FolderSettingsPostRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], FolderSettingsPostRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FolderSettings)
    ], FolderSettingsPostRequests.prototype, "folderSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.FolderSettings)
    ], FolderSettingsPostRequests.prototype, "folderSettings1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.FolderSettings)
    ], FolderSettingsPostRequests.prototype, "folderSettings2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], FolderSettingsPostRequests.prototype, "textXml", void 0);
    return FolderSettingsPostRequests;
}(SpeakeasyBase));
export { FolderSettingsPostRequests };
var FolderSettingsPostRequest = /** @class */ (function (_super) {
    __extends(FolderSettingsPostRequest, _super);
    function FolderSettingsPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FolderSettingsPostPathParams)
    ], FolderSettingsPostRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FolderSettingsPostRequests)
    ], FolderSettingsPostRequest.prototype, "request", void 0);
    return FolderSettingsPostRequest;
}(SpeakeasyBase));
export { FolderSettingsPostRequest };
var FolderSettingsPostResponse = /** @class */ (function (_super) {
    __extends(FolderSettingsPostResponse, _super);
    function FolderSettingsPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], FolderSettingsPostResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FolderSettingsPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FolderMenuItem)
    ], FolderSettingsPostResponse.prototype, "folderMenuItem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FolderSettingsPostResponse.prototype, "statusCode", void 0);
    return FolderSettingsPostResponse;
}(SpeakeasyBase));
export { FolderSettingsPostResponse };
