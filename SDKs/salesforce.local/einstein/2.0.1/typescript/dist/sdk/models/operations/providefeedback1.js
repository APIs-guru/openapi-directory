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
var ProvideFeedback1RequestBody = /** @class */ (function (_super) {
    __extends(ProvideFeedback1RequestBody, _super);
    function ProvideFeedback1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=data" }),
        __metadata("design:type", String)
    ], ProvideFeedback1RequestBody.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=expectedLabel" }),
        __metadata("design:type", String)
    ], ProvideFeedback1RequestBody.prototype, "expectedLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=modelId" }),
        __metadata("design:type", String)
    ], ProvideFeedback1RequestBody.prototype, "modelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], ProvideFeedback1RequestBody.prototype, "name", void 0);
    return ProvideFeedback1RequestBody;
}(SpeakeasyBase));
export { ProvideFeedback1RequestBody };
var ProvideFeedback1Security = /** @class */ (function (_super) {
    __extends(ProvideFeedback1Security, _super);
    function ProvideFeedback1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], ProvideFeedback1Security.prototype, "bearerToken", void 0);
    return ProvideFeedback1Security;
}(SpeakeasyBase));
export { ProvideFeedback1Security };
var ProvideFeedback1Request = /** @class */ (function (_super) {
    __extends(ProvideFeedback1Request, _super);
    function ProvideFeedback1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ProvideFeedback1RequestBody)
    ], ProvideFeedback1Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProvideFeedback1Security)
    ], ProvideFeedback1Request.prototype, "security", void 0);
    return ProvideFeedback1Request;
}(SpeakeasyBase));
export { ProvideFeedback1Request };
var ProvideFeedback1Response = /** @class */ (function (_super) {
    __extends(ProvideFeedback1Response, _super);
    function ProvideFeedback1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProvideFeedback1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Example)
    ], ProvideFeedback1Response.prototype, "example", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProvideFeedback1Response.prototype, "statusCode", void 0);
    return ProvideFeedback1Response;
}(SpeakeasyBase));
export { ProvideFeedback1Response };
