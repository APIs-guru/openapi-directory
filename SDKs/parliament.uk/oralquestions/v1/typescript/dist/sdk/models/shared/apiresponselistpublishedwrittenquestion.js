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
import { PagingInfo } from "./paginginfo";
import { PublishedWrittenQuestion } from "./publishedwrittenquestion";
export var ApiResponseListPublishedWrittenQuestionStatusCodeEnum;
(function (ApiResponseListPublishedWrittenQuestionStatusCodeEnum) {
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["Continue"] = "Continue";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["SwitchingProtocols"] = "SwitchingProtocols";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["Ok"] = "OK";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["Created"] = "Created";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["Accepted"] = "Accepted";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["NonAuthoritativeInformation"] = "NonAuthoritativeInformation";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["NoContent"] = "NoContent";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["ResetContent"] = "ResetContent";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["PartialContent"] = "PartialContent";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["MultipleChoices"] = "MultipleChoices";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["Ambiguous"] = "Ambiguous";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["MovedPermanently"] = "MovedPermanently";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["Moved"] = "Moved";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["Found"] = "Found";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["Redirect"] = "Redirect";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["SeeOther"] = "SeeOther";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["RedirectMethod"] = "RedirectMethod";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["NotModified"] = "NotModified";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["UseProxy"] = "UseProxy";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["Unused"] = "Unused";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["TemporaryRedirect"] = "TemporaryRedirect";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["RedirectKeepVerb"] = "RedirectKeepVerb";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["BadRequest"] = "BadRequest";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["Unauthorized"] = "Unauthorized";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["PaymentRequired"] = "PaymentRequired";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["Forbidden"] = "Forbidden";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["NotFound"] = "NotFound";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["MethodNotAllowed"] = "MethodNotAllowed";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["NotAcceptable"] = "NotAcceptable";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["ProxyAuthenticationRequired"] = "ProxyAuthenticationRequired";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["RequestTimeout"] = "RequestTimeout";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["Conflict"] = "Conflict";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["Gone"] = "Gone";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["LengthRequired"] = "LengthRequired";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["PreconditionFailed"] = "PreconditionFailed";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["RequestEntityTooLarge"] = "RequestEntityTooLarge";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["RequestUriTooLong"] = "RequestUriTooLong";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["UnsupportedMediaType"] = "UnsupportedMediaType";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["RequestedRangeNotSatisfiable"] = "RequestedRangeNotSatisfiable";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["ExpectationFailed"] = "ExpectationFailed";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["UpgradeRequired"] = "UpgradeRequired";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["InternalServerError"] = "InternalServerError";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["NotImplemented"] = "NotImplemented";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["BadGateway"] = "BadGateway";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["ServiceUnavailable"] = "ServiceUnavailable";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["GatewayTimeout"] = "GatewayTimeout";
    ApiResponseListPublishedWrittenQuestionStatusCodeEnum["HttpVersionNotSupported"] = "HttpVersionNotSupported";
})(ApiResponseListPublishedWrittenQuestionStatusCodeEnum || (ApiResponseListPublishedWrittenQuestionStatusCodeEnum = {}));
var ApiResponseListPublishedWrittenQuestion = /** @class */ (function (_super) {
    __extends(ApiResponseListPublishedWrittenQuestion, _super);
    function ApiResponseListPublishedWrittenQuestion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Errors" }),
        __metadata("design:type", Array)
    ], ApiResponseListPublishedWrittenQuestion.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PagingInfo" }),
        __metadata("design:type", PagingInfo)
    ], ApiResponseListPublishedWrittenQuestion.prototype, "pagingInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Response", elemType: PublishedWrittenQuestion }),
        __metadata("design:type", Array)
    ], ApiResponseListPublishedWrittenQuestion.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusCode" }),
        __metadata("design:type", String)
    ], ApiResponseListPublishedWrittenQuestion.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Success" }),
        __metadata("design:type", Boolean)
    ], ApiResponseListPublishedWrittenQuestion.prototype, "success", void 0);
    return ApiResponseListPublishedWrittenQuestion;
}(SpeakeasyBase));
export { ApiResponseListPublishedWrittenQuestion };
