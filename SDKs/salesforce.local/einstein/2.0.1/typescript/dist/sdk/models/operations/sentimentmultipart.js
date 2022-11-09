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
var SentimentMultipartRequests = /** @class */ (function (_super) {
    __extends(SentimentMultipartRequests, _super);
    function SentimentMultipartRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SentimentPredictRequest)
    ], SentimentMultipartRequests.prototype, "sentimentPredictRequest", void 0);
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", shared.SentimentPredictRequest)
    ], SentimentMultipartRequests.prototype, "sentimentPredictRequest1", void 0);
    return SentimentMultipartRequests;
}(SpeakeasyBase));
export { SentimentMultipartRequests };
var SentimentMultipartSecurity = /** @class */ (function (_super) {
    __extends(SentimentMultipartSecurity, _super);
    function SentimentMultipartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], SentimentMultipartSecurity.prototype, "bearerToken", void 0);
    return SentimentMultipartSecurity;
}(SpeakeasyBase));
export { SentimentMultipartSecurity };
var SentimentMultipartRequest = /** @class */ (function (_super) {
    __extends(SentimentMultipartRequest, _super);
    function SentimentMultipartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SentimentMultipartRequests)
    ], SentimentMultipartRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SentimentMultipartSecurity)
    ], SentimentMultipartRequest.prototype, "security", void 0);
    return SentimentMultipartRequest;
}(SpeakeasyBase));
export { SentimentMultipartRequest };
var SentimentMultipartResponse = /** @class */ (function (_super) {
    __extends(SentimentMultipartResponse, _super);
    function SentimentMultipartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SentimentMultipartResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SentimentPredictResponse)
    ], SentimentMultipartResponse.prototype, "sentimentPredictResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SentimentMultipartResponse.prototype, "statusCode", void 0);
    return SentimentMultipartResponse;
}(SpeakeasyBase));
export { SentimentMultipartResponse };
