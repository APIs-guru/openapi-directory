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
var UploadInventoryRequestBodyFile = /** @class */ (function (_super) {
    __extends(UploadInventoryRequestBodyFile, _super);
    function UploadInventoryRequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UploadInventoryRequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], UploadInventoryRequestBodyFile.prototype, "file", void 0);
    return UploadInventoryRequestBodyFile;
}(SpeakeasyBase));
export { UploadInventoryRequestBodyFile };
var UploadInventoryRequestBodySignature = /** @class */ (function (_super) {
    __extends(UploadInventoryRequestBodySignature, _super);
    function UploadInventoryRequestBodySignature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UploadInventoryRequestBodySignature.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=signature" }),
        __metadata("design:type", String)
    ], UploadInventoryRequestBodySignature.prototype, "signature", void 0);
    return UploadInventoryRequestBodySignature;
}(SpeakeasyBase));
export { UploadInventoryRequestBodySignature };
var UploadInventoryRequestBody = /** @class */ (function (_super) {
    __extends(UploadInventoryRequestBody, _super);
    function UploadInventoryRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", UploadInventoryRequestBodyFile)
    ], UploadInventoryRequestBody.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", UploadInventoryRequestBodySignature)
    ], UploadInventoryRequestBody.prototype, "signature", void 0);
    return UploadInventoryRequestBody;
}(SpeakeasyBase));
export { UploadInventoryRequestBody };
export var UploadInventory200ApplicationJsonActionEnum;
(function (UploadInventory200ApplicationJsonActionEnum) {
    UploadInventory200ApplicationJsonActionEnum["UploadInventory"] = "uploadInventory";
})(UploadInventory200ApplicationJsonActionEnum || (UploadInventory200ApplicationJsonActionEnum = {}));
export var UploadInventory200ApplicationJsonResultEnum;
(function (UploadInventory200ApplicationJsonResultEnum) {
    UploadInventory200ApplicationJsonResultEnum["Success"] = "success";
    UploadInventory200ApplicationJsonResultEnum["Error"] = "error";
})(UploadInventory200ApplicationJsonResultEnum || (UploadInventory200ApplicationJsonResultEnum = {}));
var UploadInventory200ApplicationJson = /** @class */ (function (_super) {
    __extends(UploadInventory200ApplicationJson, _super);
    function UploadInventory200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UploadInventory200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], UploadInventory200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UploadInventory200ApplicationJson.prototype, "result", void 0);
    return UploadInventory200ApplicationJson;
}(SpeakeasyBase));
export { UploadInventory200ApplicationJson };
var UploadInventoryRequest = /** @class */ (function (_super) {
    __extends(UploadInventoryRequest, _super);
    function UploadInventoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadInventoryRequestBody)
    ], UploadInventoryRequest.prototype, "request", void 0);
    return UploadInventoryRequest;
}(SpeakeasyBase));
export { UploadInventoryRequest };
var UploadInventoryResponse = /** @class */ (function (_super) {
    __extends(UploadInventoryResponse, _super);
    function UploadInventoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadInventoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadInventoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadInventory200ApplicationJson)
    ], UploadInventoryResponse.prototype, "uploadInventory200ApplicationJsonObject", void 0);
    return UploadInventoryResponse;
}(SpeakeasyBase));
export { UploadInventoryResponse };
