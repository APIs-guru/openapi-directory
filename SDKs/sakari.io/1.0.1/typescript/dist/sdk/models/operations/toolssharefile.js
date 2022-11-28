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
var ToolsShareFileMultipartFormDataMedia = /** @class */ (function (_super) {
    __extends(ToolsShareFileMultipartFormDataMedia, _super);
    function ToolsShareFileMultipartFormDataMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ToolsShareFileMultipartFormDataMedia.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=media" }),
        __metadata("design:type", String)
    ], ToolsShareFileMultipartFormDataMedia.prototype, "media", void 0);
    return ToolsShareFileMultipartFormDataMedia;
}(SpeakeasyBase));
export { ToolsShareFileMultipartFormDataMedia };
var ToolsShareFileMultipartFormData = /** @class */ (function (_super) {
    __extends(ToolsShareFileMultipartFormData, _super);
    function ToolsShareFileMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", ToolsShareFileMultipartFormDataMedia)
    ], ToolsShareFileMultipartFormData.prototype, "media", void 0);
    return ToolsShareFileMultipartFormData;
}(SpeakeasyBase));
export { ToolsShareFileMultipartFormData };
var ToolsShareFileRequests = /** @class */ (function (_super) {
    __extends(ToolsShareFileRequests, _super);
    function ToolsShareFileRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], ToolsShareFileRequests.prototype, "applicationOctetStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ToolsShareFileMultipartFormData)
    ], ToolsShareFileRequests.prototype, "object", void 0);
    return ToolsShareFileRequests;
}(SpeakeasyBase));
export { ToolsShareFileRequests };
var ToolsShareFileSecurity = /** @class */ (function (_super) {
    __extends(ToolsShareFileSecurity, _super);
    function ToolsShareFileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], ToolsShareFileSecurity.prototype, "sakariAuth", void 0);
    return ToolsShareFileSecurity;
}(SpeakeasyBase));
export { ToolsShareFileSecurity };
var ToolsShareFileRequest = /** @class */ (function (_super) {
    __extends(ToolsShareFileRequest, _super);
    function ToolsShareFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolsShareFileRequests)
    ], ToolsShareFileRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolsShareFileSecurity)
    ], ToolsShareFileRequest.prototype, "security", void 0);
    return ToolsShareFileRequest;
}(SpeakeasyBase));
export { ToolsShareFileRequest };
var ToolsShareFileResponse = /** @class */ (function (_super) {
    __extends(ToolsShareFileResponse, _super);
    function ToolsShareFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ToolsShareFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], ToolsShareFileResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ShareFileResponse)
    ], ToolsShareFileResponse.prototype, "shareFileResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ToolsShareFileResponse.prototype, "statusCode", void 0);
    return ToolsShareFileResponse;
}(SpeakeasyBase));
export { ToolsShareFileResponse };
