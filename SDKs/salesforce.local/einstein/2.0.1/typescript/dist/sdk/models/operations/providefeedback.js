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
var ProvideFeedbackRequestBody = /** @class */ (function (_super) {
    __extends(ProvideFeedbackRequestBody, _super);
    function ProvideFeedbackRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=document" }),
        __metadata("design:type", String)
    ], ProvideFeedbackRequestBody.prototype, "document", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=expectedLabel" }),
        __metadata("design:type", String)
    ], ProvideFeedbackRequestBody.prototype, "expectedLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=modelId" }),
        __metadata("design:type", String)
    ], ProvideFeedbackRequestBody.prototype, "modelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], ProvideFeedbackRequestBody.prototype, "name", void 0);
    return ProvideFeedbackRequestBody;
}(SpeakeasyBase));
export { ProvideFeedbackRequestBody };
var ProvideFeedbackSecurity = /** @class */ (function (_super) {
    __extends(ProvideFeedbackSecurity, _super);
    function ProvideFeedbackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], ProvideFeedbackSecurity.prototype, "bearerToken", void 0);
    return ProvideFeedbackSecurity;
}(SpeakeasyBase));
export { ProvideFeedbackSecurity };
var ProvideFeedbackRequest = /** @class */ (function (_super) {
    __extends(ProvideFeedbackRequest, _super);
    function ProvideFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ProvideFeedbackRequestBody)
    ], ProvideFeedbackRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProvideFeedbackSecurity)
    ], ProvideFeedbackRequest.prototype, "security", void 0);
    return ProvideFeedbackRequest;
}(SpeakeasyBase));
export { ProvideFeedbackRequest };
var ProvideFeedbackResponse = /** @class */ (function (_super) {
    __extends(ProvideFeedbackResponse, _super);
    function ProvideFeedbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProvideFeedbackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Example)
    ], ProvideFeedbackResponse.prototype, "example", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProvideFeedbackResponse.prototype, "statusCode", void 0);
    return ProvideFeedbackResponse;
}(SpeakeasyBase));
export { ProvideFeedbackResponse };
