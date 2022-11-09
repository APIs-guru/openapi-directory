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
var UpdateDatasetAsync1RequestBody = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsync1RequestBody, _super);
    function UpdateDatasetAsync1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, name=data" }),
        __metadata("design:type", String)
    ], UpdateDatasetAsync1RequestBody.prototype, "data", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=modelId" }),
        __metadata("design:type", String)
    ], UpdateDatasetAsync1RequestBody.prototype, "modelId", void 0);
    return UpdateDatasetAsync1RequestBody;
}(SpeakeasyBase));
export { UpdateDatasetAsync1RequestBody };
var UpdateDatasetAsync1Security = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsync1Security, _super);
    function UpdateDatasetAsync1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], UpdateDatasetAsync1Security.prototype, "bearerToken", void 0);
    return UpdateDatasetAsync1Security;
}(SpeakeasyBase));
export { UpdateDatasetAsync1Security };
var UpdateDatasetAsync1Request = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsync1Request, _super);
    function UpdateDatasetAsync1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateDatasetAsync1RequestBody)
    ], UpdateDatasetAsync1Request.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDatasetAsync1Security)
    ], UpdateDatasetAsync1Request.prototype, "security", void 0);
    return UpdateDatasetAsync1Request;
}(SpeakeasyBase));
export { UpdateDatasetAsync1Request };
var UpdateDatasetAsync1Response = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsync1Response, _super);
    function UpdateDatasetAsync1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDatasetAsync1Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Dataset)
    ], UpdateDatasetAsync1Response.prototype, "dataset", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDatasetAsync1Response.prototype, "statusCode", void 0);
    return UpdateDatasetAsync1Response;
}(SpeakeasyBase));
export { UpdateDatasetAsync1Response };
