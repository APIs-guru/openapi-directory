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
export var UploadDatasetSync1RequestBodyTypeEnum;
(function (UploadDatasetSync1RequestBodyTypeEnum) {
    UploadDatasetSync1RequestBodyTypeEnum["Image"] = "image";
    UploadDatasetSync1RequestBodyTypeEnum["ImageDetection"] = "image-detection";
    UploadDatasetSync1RequestBodyTypeEnum["ImageMultiLabel"] = "image-multi-label";
})(UploadDatasetSync1RequestBodyTypeEnum || (UploadDatasetSync1RequestBodyTypeEnum = {}));
var UploadDatasetSync1RequestBody = /** @class */ (function (_super) {
    __extends(UploadDatasetSync1RequestBody, _super);
    function UploadDatasetSync1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=data" }),
        __metadata("design:type", String)
    ], UploadDatasetSync1RequestBody.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], UploadDatasetSync1RequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=path" }),
        __metadata("design:type", String)
    ], UploadDatasetSync1RequestBody.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], UploadDatasetSync1RequestBody.prototype, "type", void 0);
    return UploadDatasetSync1RequestBody;
}(SpeakeasyBase));
export { UploadDatasetSync1RequestBody };
var UploadDatasetSync1Security = /** @class */ (function (_super) {
    __extends(UploadDatasetSync1Security, _super);
    function UploadDatasetSync1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], UploadDatasetSync1Security.prototype, "bearerToken", void 0);
    return UploadDatasetSync1Security;
}(SpeakeasyBase));
export { UploadDatasetSync1Security };
var UploadDatasetSync1Request = /** @class */ (function (_super) {
    __extends(UploadDatasetSync1Request, _super);
    function UploadDatasetSync1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadDatasetSync1RequestBody)
    ], UploadDatasetSync1Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadDatasetSync1Security)
    ], UploadDatasetSync1Request.prototype, "security", void 0);
    return UploadDatasetSync1Request;
}(SpeakeasyBase));
export { UploadDatasetSync1Request };
var UploadDatasetSync1Response = /** @class */ (function (_super) {
    __extends(UploadDatasetSync1Response, _super);
    function UploadDatasetSync1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadDatasetSync1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Dataset)
    ], UploadDatasetSync1Response.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadDatasetSync1Response.prototype, "statusCode", void 0);
    return UploadDatasetSync1Response;
}(SpeakeasyBase));
export { UploadDatasetSync1Response };
