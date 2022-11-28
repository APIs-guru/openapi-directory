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
var DetectMultipartRequests = /** @class */ (function (_super) {
    __extends(DetectMultipartRequests, _super);
    function DetectMultipartRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObjectDetectionRequest)
    ], DetectMultipartRequests.prototype, "objectDetectionRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", shared.ObjectDetectionRequest)
    ], DetectMultipartRequests.prototype, "objectDetectionRequest1", void 0);
    return DetectMultipartRequests;
}(SpeakeasyBase));
export { DetectMultipartRequests };
var DetectMultipartSecurity = /** @class */ (function (_super) {
    __extends(DetectMultipartSecurity, _super);
    function DetectMultipartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], DetectMultipartSecurity.prototype, "bearerToken", void 0);
    return DetectMultipartSecurity;
}(SpeakeasyBase));
export { DetectMultipartSecurity };
var DetectMultipartRequest = /** @class */ (function (_super) {
    __extends(DetectMultipartRequest, _super);
    function DetectMultipartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DetectMultipartRequests)
    ], DetectMultipartRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DetectMultipartSecurity)
    ], DetectMultipartRequest.prototype, "security", void 0);
    return DetectMultipartRequest;
}(SpeakeasyBase));
export { DetectMultipartRequest };
var DetectMultipartResponse = /** @class */ (function (_super) {
    __extends(DetectMultipartResponse, _super);
    function DetectMultipartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DetectMultipartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectDetectionResponse)
    ], DetectMultipartResponse.prototype, "objectDetectionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DetectMultipartResponse.prototype, "statusCode", void 0);
    return DetectMultipartResponse;
}(SpeakeasyBase));
export { DetectMultipartResponse };
