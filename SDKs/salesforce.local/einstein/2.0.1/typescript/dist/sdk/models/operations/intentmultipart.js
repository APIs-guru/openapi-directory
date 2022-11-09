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
var IntentMultipartRequests = /** @class */ (function (_super) {
    __extends(IntentMultipartRequests, _super);
    function IntentMultipartRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IntentPredictRequest)
    ], IntentMultipartRequests.prototype, "intentPredictRequest", void 0);
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", shared.IntentPredictRequest)
    ], IntentMultipartRequests.prototype, "intentPredictRequest1", void 0);
    return IntentMultipartRequests;
}(SpeakeasyBase));
export { IntentMultipartRequests };
var IntentMultipartSecurity = /** @class */ (function (_super) {
    __extends(IntentMultipartSecurity, _super);
    function IntentMultipartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], IntentMultipartSecurity.prototype, "bearerToken", void 0);
    return IntentMultipartSecurity;
}(SpeakeasyBase));
export { IntentMultipartSecurity };
var IntentMultipartRequest = /** @class */ (function (_super) {
    __extends(IntentMultipartRequest, _super);
    function IntentMultipartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IntentMultipartRequests)
    ], IntentMultipartRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IntentMultipartSecurity)
    ], IntentMultipartRequest.prototype, "security", void 0);
    return IntentMultipartRequest;
}(SpeakeasyBase));
export { IntentMultipartRequest };
var IntentMultipartResponse = /** @class */ (function (_super) {
    __extends(IntentMultipartResponse, _super);
    function IntentMultipartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IntentMultipartResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.IntentPredictResponse)
    ], IntentMultipartResponse.prototype, "intentPredictResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PredictionErrorResponse)
    ], IntentMultipartResponse.prototype, "predictionErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IntentMultipartResponse.prototype, "statusCode", void 0);
    return IntentMultipartResponse;
}(SpeakeasyBase));
export { IntentMultipartResponse };
