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
var Retrain1RequestBody = /** @class */ (function (_super) {
    __extends(Retrain1RequestBody, _super);
    function Retrain1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, name=algorithm" }),
        __metadata("design:type", String)
    ], Retrain1RequestBody.prototype, "algorithm", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=epochs" }),
        __metadata("design:type", Number)
    ], Retrain1RequestBody.prototype, "epochs", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=learningRate" }),
        __metadata("design:type", Number)
    ], Retrain1RequestBody.prototype, "learningRate", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=modelId" }),
        __metadata("design:type", String)
    ], Retrain1RequestBody.prototype, "modelId", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=trainParams;json=true" }),
        __metadata("design:type", shared.V2VisionTrainParams)
    ], Retrain1RequestBody.prototype, "trainParams", void 0);
    return Retrain1RequestBody;
}(SpeakeasyBase));
export { Retrain1RequestBody };
var Retrain1Security = /** @class */ (function (_super) {
    __extends(Retrain1Security, _super);
    function Retrain1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], Retrain1Security.prototype, "bearerToken", void 0);
    return Retrain1Security;
}(SpeakeasyBase));
export { Retrain1Security };
var Retrain1Request = /** @class */ (function (_super) {
    __extends(Retrain1Request, _super);
    function Retrain1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Retrain1RequestBody)
    ], Retrain1Request.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Retrain1Security)
    ], Retrain1Request.prototype, "security", void 0);
    return Retrain1Request;
}(SpeakeasyBase));
export { Retrain1Request };
var Retrain1Response = /** @class */ (function (_super) {
    __extends(Retrain1Response, _super);
    function Retrain1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], Retrain1Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], Retrain1Response.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrainResponse)
    ], Retrain1Response.prototype, "trainResponse", void 0);
    return Retrain1Response;
}(SpeakeasyBase));
export { Retrain1Response };
