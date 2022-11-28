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
var ReversePagesV1RequestBodyFile = /** @class */ (function (_super) {
    __extends(ReversePagesV1RequestBodyFile, _super);
    function ReversePagesV1RequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ReversePagesV1RequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], ReversePagesV1RequestBodyFile.prototype, "file", void 0);
    return ReversePagesV1RequestBodyFile;
}(SpeakeasyBase));
export { ReversePagesV1RequestBodyFile };
var ReversePagesV1RequestBody = /** @class */ (function (_super) {
    __extends(ReversePagesV1RequestBody, _super);
    function ReversePagesV1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", ReversePagesV1RequestBodyFile)
    ], ReversePagesV1RequestBody.prototype, "file", void 0);
    return ReversePagesV1RequestBody;
}(SpeakeasyBase));
export { ReversePagesV1RequestBody };
var ReversePagesV14XxApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(ReversePagesV14XxApplicationProblemPlusJson, _super);
    function ReversePagesV14XxApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Map)
    ], ReversePagesV14XxApplicationProblemPlusJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], ReversePagesV14XxApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ReversePagesV14XxApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ReversePagesV14XxApplicationProblemPlusJson.prototype, "type", void 0);
    return ReversePagesV14XxApplicationProblemPlusJson;
}(SpeakeasyBase));
export { ReversePagesV14XxApplicationProblemPlusJson };
var ReversePagesV1Request = /** @class */ (function (_super) {
    __extends(ReversePagesV1Request, _super);
    function ReversePagesV1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ReversePagesV1RequestBody)
    ], ReversePagesV1Request.prototype, "request", void 0);
    return ReversePagesV1Request;
}(SpeakeasyBase));
export { ReversePagesV1Request };
var ReversePagesV1Response = /** @class */ (function (_super) {
    __extends(ReversePagesV1Response, _super);
    function ReversePagesV1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReversePagesV1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReversePagesV1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReversePagesV1Response.prototype, "reversePagesV1200ApplicationPdfBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReversePagesV14XxApplicationProblemPlusJson)
    ], ReversePagesV1Response.prototype, "reversePagesV14XxApplicationProblemPlusJsonObject", void 0);
    return ReversePagesV1Response;
}(SpeakeasyBase));
export { ReversePagesV1Response };
