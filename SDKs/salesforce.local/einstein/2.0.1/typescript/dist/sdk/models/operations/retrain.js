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
var RetrainRequestBody = /** @class */ (function (_super) {
    __extends(RetrainRequestBody, _super);
    function RetrainRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=algorithm" }),
        __metadata("design:type", String)
    ], RetrainRequestBody.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=epochs" }),
        __metadata("design:type", Number)
    ], RetrainRequestBody.prototype, "epochs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=learningRate" }),
        __metadata("design:type", Number)
    ], RetrainRequestBody.prototype, "learningRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=modelId" }),
        __metadata("design:type", String)
    ], RetrainRequestBody.prototype, "modelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=trainParams;json=true" }),
        __metadata("design:type", shared.V2LanguageTrainParams)
    ], RetrainRequestBody.prototype, "trainParams", void 0);
    return RetrainRequestBody;
}(SpeakeasyBase));
export { RetrainRequestBody };
var RetrainSecurity = /** @class */ (function (_super) {
    __extends(RetrainSecurity, _super);
    function RetrainSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], RetrainSecurity.prototype, "bearerToken", void 0);
    return RetrainSecurity;
}(SpeakeasyBase));
export { RetrainSecurity };
var RetrainRequest = /** @class */ (function (_super) {
    __extends(RetrainRequest, _super);
    function RetrainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", RetrainRequestBody)
    ], RetrainRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrainSecurity)
    ], RetrainRequest.prototype, "security", void 0);
    return RetrainRequest;
}(SpeakeasyBase));
export { RetrainRequest };
var RetrainResponse = /** @class */ (function (_super) {
    __extends(RetrainResponse, _super);
    function RetrainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrainResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrainResponse)
    ], RetrainResponse.prototype, "trainResponse", void 0);
    return RetrainResponse;
}(SpeakeasyBase));
export { RetrainResponse };
