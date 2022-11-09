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
export var UploadDatasetSyncRequestBodyTypeEnum;
(function (UploadDatasetSyncRequestBodyTypeEnum) {
    UploadDatasetSyncRequestBodyTypeEnum["TextIntent"] = "text-intent";
    UploadDatasetSyncRequestBodyTypeEnum["TextSentiment"] = "text-sentiment";
})(UploadDatasetSyncRequestBodyTypeEnum || (UploadDatasetSyncRequestBodyTypeEnum = {}));
var UploadDatasetSyncRequestBody = /** @class */ (function (_super) {
    __extends(UploadDatasetSyncRequestBody, _super);
    function UploadDatasetSyncRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, name=data" }),
        __metadata("design:type", String)
    ], UploadDatasetSyncRequestBody.prototype, "data", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], UploadDatasetSyncRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=path" }),
        __metadata("design:type", String)
    ], UploadDatasetSyncRequestBody.prototype, "path", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], UploadDatasetSyncRequestBody.prototype, "type", void 0);
    return UploadDatasetSyncRequestBody;
}(SpeakeasyBase));
export { UploadDatasetSyncRequestBody };
var UploadDatasetSyncSecurity = /** @class */ (function (_super) {
    __extends(UploadDatasetSyncSecurity, _super);
    function UploadDatasetSyncSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], UploadDatasetSyncSecurity.prototype, "bearerToken", void 0);
    return UploadDatasetSyncSecurity;
}(SpeakeasyBase));
export { UploadDatasetSyncSecurity };
var UploadDatasetSyncRequest = /** @class */ (function (_super) {
    __extends(UploadDatasetSyncRequest, _super);
    function UploadDatasetSyncRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadDatasetSyncRequestBody)
    ], UploadDatasetSyncRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UploadDatasetSyncSecurity)
    ], UploadDatasetSyncRequest.prototype, "security", void 0);
    return UploadDatasetSyncRequest;
}(SpeakeasyBase));
export { UploadDatasetSyncRequest };
var UploadDatasetSyncResponse = /** @class */ (function (_super) {
    __extends(UploadDatasetSyncResponse, _super);
    function UploadDatasetSyncResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UploadDatasetSyncResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Dataset)
    ], UploadDatasetSyncResponse.prototype, "dataset", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UploadDatasetSyncResponse.prototype, "statusCode", void 0);
    return UploadDatasetSyncResponse;
}(SpeakeasyBase));
export { UploadDatasetSyncResponse };
