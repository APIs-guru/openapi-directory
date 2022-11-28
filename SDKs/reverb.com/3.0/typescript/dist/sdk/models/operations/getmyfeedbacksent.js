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
var GetMyFeedbackSentSecurity = /** @class */ (function (_super) {
    __extends(GetMyFeedbackSentSecurity, _super);
    function GetMyFeedbackSentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetMyFeedbackSentSecurity.prototype, "oauth2", void 0);
    return GetMyFeedbackSentSecurity;
}(SpeakeasyBase));
export { GetMyFeedbackSentSecurity };
var GetMyFeedbackSentRequest = /** @class */ (function (_super) {
    __extends(GetMyFeedbackSentRequest, _super);
    function GetMyFeedbackSentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMyFeedbackSentSecurity)
    ], GetMyFeedbackSentRequest.prototype, "security", void 0);
    return GetMyFeedbackSentRequest;
}(SpeakeasyBase));
export { GetMyFeedbackSentRequest };
var GetMyFeedbackSentResponse = /** @class */ (function (_super) {
    __extends(GetMyFeedbackSentResponse, _super);
    function GetMyFeedbackSentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMyFeedbackSentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMyFeedbackSentResponse.prototype, "statusCode", void 0);
    return GetMyFeedbackSentResponse;
}(SpeakeasyBase));
export { GetMyFeedbackSentResponse };
