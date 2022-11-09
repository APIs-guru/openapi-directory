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
export var UploadDatasetAsync1RequestBodyTypeEnum;
(function (UploadDatasetAsync1RequestBodyTypeEnum) {
    UploadDatasetAsync1RequestBodyTypeEnum["Image"] = "image";
    UploadDatasetAsync1RequestBodyTypeEnum["ImageDetection"] = "image-detection";
    UploadDatasetAsync1RequestBodyTypeEnum["ImageMultiLabel"] = "image-multi-label";
})(UploadDatasetAsync1RequestBodyTypeEnum || (UploadDatasetAsync1RequestBodyTypeEnum = {}));
var UploadDatasetAsync1RequestBody = /** @class */ (function (_super) {
    __extends(UploadDatasetAsync1RequestBody, _super);
    function UploadDatasetAsync1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, name=data" }),
        __metadata("design:type", String)
    ], UploadDatasetAsync1RequestBody.prototype, "data", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], UploadDatasetAsync1RequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=path" }),
        __metadata("design:type", String)
    ], UploadDatasetAsync1RequestBody.prototype, "path", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], UploadDatasetAsync1RequestBody.prototype, "type", void 0);
    return UploadDatasetAsync1RequestBody;
}(SpeakeasyBase));
export { UploadDatasetAsync1RequestBody };
var UploadDatasetAsync1Security = /** @class */ (function (_super) {
    __extends(UploadDatasetAsync1Security, _super);
    function UploadDatasetAsync1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], UploadDatasetAsync1Security.prototype, "bearerToken", void 0);
    return UploadDatasetAsync1Security;
}(SpeakeasyBase));
export { UploadDatasetAsync1Security };
var UploadDatasetAsync1Request = /** @class */ (function (_super) {
    __extends(UploadDatasetAsync1Request, _super);
    function UploadDatasetAsync1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadDatasetAsync1RequestBody)
    ], UploadDatasetAsync1Request.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UploadDatasetAsync1Security)
    ], UploadDatasetAsync1Request.prototype, "security", void 0);
    return UploadDatasetAsync1Request;
}(SpeakeasyBase));
export { UploadDatasetAsync1Request };
var UploadDatasetAsync1Response = /** @class */ (function (_super) {
    __extends(UploadDatasetAsync1Response, _super);
    function UploadDatasetAsync1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UploadDatasetAsync1Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Dataset)
    ], UploadDatasetAsync1Response.prototype, "dataset", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UploadDatasetAsync1Response.prototype, "statusCode", void 0);
    return UploadDatasetAsync1Response;
}(SpeakeasyBase));
export { UploadDatasetAsync1Response };
