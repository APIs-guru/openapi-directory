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
var SubmitUserFeedbackPathParams = /** @class */ (function (_super) {
    __extends(SubmitUserFeedbackPathParams, _super);
    function SubmitUserFeedbackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], SubmitUserFeedbackPathParams.prototype, "userId", void 0);
    return SubmitUserFeedbackPathParams;
}(SpeakeasyBase));
export { SubmitUserFeedbackPathParams };
var SubmitUserFeedbackRequestBody = /** @class */ (function (_super) {
    __extends(SubmitUserFeedbackRequestBody, _super);
    function SubmitUserFeedbackRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=category" }),
        __metadata("design:type", String)
    ], SubmitUserFeedbackRequestBody.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=content" }),
        __metadata("design:type", String)
    ], SubmitUserFeedbackRequestBody.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=positive" }),
        __metadata("design:type", Number)
    ], SubmitUserFeedbackRequestBody.prototype, "positive", void 0);
    return SubmitUserFeedbackRequestBody;
}(SpeakeasyBase));
export { SubmitUserFeedbackRequestBody };
var SubmitUserFeedback200ApplicationJson = /** @class */ (function (_super) {
    __extends(SubmitUserFeedback200ApplicationJson, _super);
    function SubmitUserFeedback200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedback" }),
        __metadata("design:type", shared.Feedback)
    ], SubmitUserFeedback200ApplicationJson.prototype, "feedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", shared.User)
    ], SubmitUserFeedback200ApplicationJson.prototype, "user", void 0);
    return SubmitUserFeedback200ApplicationJson;
}(SpeakeasyBase));
export { SubmitUserFeedback200ApplicationJson };
var SubmitUserFeedbackRequest = /** @class */ (function (_super) {
    __extends(SubmitUserFeedbackRequest, _super);
    function SubmitUserFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubmitUserFeedbackPathParams)
    ], SubmitUserFeedbackRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", SubmitUserFeedbackRequestBody)
    ], SubmitUserFeedbackRequest.prototype, "request", void 0);
    return SubmitUserFeedbackRequest;
}(SpeakeasyBase));
export { SubmitUserFeedbackRequest };
var SubmitUserFeedbackResponse = /** @class */ (function (_super) {
    __extends(SubmitUserFeedbackResponse, _super);
    function SubmitUserFeedbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SubmitUserFeedbackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SubmitUserFeedbackResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubmitUserFeedback200ApplicationJson)
    ], SubmitUserFeedbackResponse.prototype, "submitUserFeedback200ApplicationJsonObject", void 0);
    return SubmitUserFeedbackResponse;
}(SpeakeasyBase));
export { SubmitUserFeedbackResponse };
