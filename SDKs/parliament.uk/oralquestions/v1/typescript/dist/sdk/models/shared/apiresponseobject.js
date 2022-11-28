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
export var ApiResponseObjectStatusCodeEnum;
(function (ApiResponseObjectStatusCodeEnum) {
    ApiResponseObjectStatusCodeEnum["Continue"] = "Continue";
    ApiResponseObjectStatusCodeEnum["SwitchingProtocols"] = "SwitchingProtocols";
    ApiResponseObjectStatusCodeEnum["Ok"] = "OK";
    ApiResponseObjectStatusCodeEnum["Created"] = "Created";
    ApiResponseObjectStatusCodeEnum["Accepted"] = "Accepted";
    ApiResponseObjectStatusCodeEnum["NonAuthoritativeInformation"] = "NonAuthoritativeInformation";
    ApiResponseObjectStatusCodeEnum["NoContent"] = "NoContent";
    ApiResponseObjectStatusCodeEnum["ResetContent"] = "ResetContent";
    ApiResponseObjectStatusCodeEnum["PartialContent"] = "PartialContent";
    ApiResponseObjectStatusCodeEnum["MultipleChoices"] = "MultipleChoices";
    ApiResponseObjectStatusCodeEnum["Ambiguous"] = "Ambiguous";
    ApiResponseObjectStatusCodeEnum["MovedPermanently"] = "MovedPermanently";
    ApiResponseObjectStatusCodeEnum["Moved"] = "Moved";
    ApiResponseObjectStatusCodeEnum["Found"] = "Found";
    ApiResponseObjectStatusCodeEnum["Redirect"] = "Redirect";
    ApiResponseObjectStatusCodeEnum["SeeOther"] = "SeeOther";
    ApiResponseObjectStatusCodeEnum["RedirectMethod"] = "RedirectMethod";
    ApiResponseObjectStatusCodeEnum["NotModified"] = "NotModified";
    ApiResponseObjectStatusCodeEnum["UseProxy"] = "UseProxy";
    ApiResponseObjectStatusCodeEnum["Unused"] = "Unused";
    ApiResponseObjectStatusCodeEnum["TemporaryRedirect"] = "TemporaryRedirect";
    ApiResponseObjectStatusCodeEnum["RedirectKeepVerb"] = "RedirectKeepVerb";
    ApiResponseObjectStatusCodeEnum["BadRequest"] = "BadRequest";
    ApiResponseObjectStatusCodeEnum["Unauthorized"] = "Unauthorized";
    ApiResponseObjectStatusCodeEnum["PaymentRequired"] = "PaymentRequired";
    ApiResponseObjectStatusCodeEnum["Forbidden"] = "Forbidden";
    ApiResponseObjectStatusCodeEnum["NotFound"] = "NotFound";
    ApiResponseObjectStatusCodeEnum["MethodNotAllowed"] = "MethodNotAllowed";
    ApiResponseObjectStatusCodeEnum["NotAcceptable"] = "NotAcceptable";
    ApiResponseObjectStatusCodeEnum["ProxyAuthenticationRequired"] = "ProxyAuthenticationRequired";
    ApiResponseObjectStatusCodeEnum["RequestTimeout"] = "RequestTimeout";
    ApiResponseObjectStatusCodeEnum["Conflict"] = "Conflict";
    ApiResponseObjectStatusCodeEnum["Gone"] = "Gone";
    ApiResponseObjectStatusCodeEnum["LengthRequired"] = "LengthRequired";
    ApiResponseObjectStatusCodeEnum["PreconditionFailed"] = "PreconditionFailed";
    ApiResponseObjectStatusCodeEnum["RequestEntityTooLarge"] = "RequestEntityTooLarge";
    ApiResponseObjectStatusCodeEnum["RequestUriTooLong"] = "RequestUriTooLong";
    ApiResponseObjectStatusCodeEnum["UnsupportedMediaType"] = "UnsupportedMediaType";
    ApiResponseObjectStatusCodeEnum["RequestedRangeNotSatisfiable"] = "RequestedRangeNotSatisfiable";
    ApiResponseObjectStatusCodeEnum["ExpectationFailed"] = "ExpectationFailed";
    ApiResponseObjectStatusCodeEnum["UpgradeRequired"] = "UpgradeRequired";
    ApiResponseObjectStatusCodeEnum["InternalServerError"] = "InternalServerError";
    ApiResponseObjectStatusCodeEnum["NotImplemented"] = "NotImplemented";
    ApiResponseObjectStatusCodeEnum["BadGateway"] = "BadGateway";
    ApiResponseObjectStatusCodeEnum["ServiceUnavailable"] = "ServiceUnavailable";
    ApiResponseObjectStatusCodeEnum["GatewayTimeout"] = "GatewayTimeout";
    ApiResponseObjectStatusCodeEnum["HttpVersionNotSupported"] = "HttpVersionNotSupported";
})(ApiResponseObjectStatusCodeEnum || (ApiResponseObjectStatusCodeEnum = {}));
var ApiResponseObject = /** @class */ (function (_super) {
    __extends(ApiResponseObject, _super);
    function ApiResponseObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Errors" }),
        __metadata("design:type", Array)
    ], ApiResponseObject.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PagingInfo" }),
        __metadata("design:type", PagingInfo)
    ], ApiResponseObject.prototype, "pagingInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Response" }),
        __metadata("design:type", Map)
    ], ApiResponseObject.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusCode" }),
        __metadata("design:type", String)
    ], ApiResponseObject.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Success" }),
        __metadata("design:type", Boolean)
    ], ApiResponseObject.prototype, "success", void 0);
    return ApiResponseObject;
}(SpeakeasyBase));
export { ApiResponseObject };
