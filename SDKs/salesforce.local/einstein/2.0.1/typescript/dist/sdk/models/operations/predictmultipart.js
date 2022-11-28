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
var PredictMultipartRequests = /** @class */ (function (_super) {
    __extends(PredictMultipartRequests, _super);
    function PredictMultipartRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImageClassificationRequest)
    ], PredictMultipartRequests.prototype, "imageClassificationRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", shared.ImageClassificationRequest)
    ], PredictMultipartRequests.prototype, "imageClassificationRequest1", void 0);
    return PredictMultipartRequests;
}(SpeakeasyBase));
export { PredictMultipartRequests };
var PredictMultipartSecurity = /** @class */ (function (_super) {
    __extends(PredictMultipartSecurity, _super);
    function PredictMultipartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], PredictMultipartSecurity.prototype, "bearerToken", void 0);
    return PredictMultipartSecurity;
}(SpeakeasyBase));
export { PredictMultipartSecurity };
var PredictMultipartRequest = /** @class */ (function (_super) {
    __extends(PredictMultipartRequest, _super);
    function PredictMultipartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PredictMultipartRequests)
    ], PredictMultipartRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PredictMultipartSecurity)
    ], PredictMultipartRequest.prototype, "security", void 0);
    return PredictMultipartRequest;
}(SpeakeasyBase));
export { PredictMultipartRequest };
var PredictMultipartResponse = /** @class */ (function (_super) {
    __extends(PredictMultipartResponse, _super);
    function PredictMultipartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PredictMultipartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImageClassificationResponse)
    ], PredictMultipartResponse.prototype, "imageClassificationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PredictMultipartResponse.prototype, "statusCode", void 0);
    return PredictMultipartResponse;
}(SpeakeasyBase));
export { PredictMultipartResponse };
