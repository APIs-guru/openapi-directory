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
export var FETCHUNDERSTANDQUERY_SERVERS = [
    "https://preview.twilio.com",
];
var FetchUnderstandQueryPathParams = /** @class */ (function (_super) {
    __extends(FetchUnderstandQueryPathParams, _super);
    function FetchUnderstandQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], FetchUnderstandQueryPathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchUnderstandQueryPathParams.prototype, "sid", void 0);
    return FetchUnderstandQueryPathParams;
}(SpeakeasyBase));
export { FetchUnderstandQueryPathParams };
var FetchUnderstandQuerySecurity = /** @class */ (function (_super) {
    __extends(FetchUnderstandQuerySecurity, _super);
    function FetchUnderstandQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchUnderstandQuerySecurity.prototype, "accountSidAuthToken", void 0);
    return FetchUnderstandQuerySecurity;
}(SpeakeasyBase));
export { FetchUnderstandQuerySecurity };
var FetchUnderstandQueryRequest = /** @class */ (function (_super) {
    __extends(FetchUnderstandQueryRequest, _super);
    function FetchUnderstandQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchUnderstandQueryRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchUnderstandQueryPathParams)
    ], FetchUnderstandQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchUnderstandQuerySecurity)
    ], FetchUnderstandQueryRequest.prototype, "security", void 0);
    return FetchUnderstandQueryRequest;
}(SpeakeasyBase));
export { FetchUnderstandQueryRequest };
var FetchUnderstandQueryResponse = /** @class */ (function (_super) {
    __extends(FetchUnderstandQueryResponse, _super);
    function FetchUnderstandQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchUnderstandQueryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchUnderstandQueryResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantQuery)
    ], FetchUnderstandQueryResponse.prototype, "previewUnderstandAssistantQuery", void 0);
    return FetchUnderstandQueryResponse;
}(SpeakeasyBase));
export { FetchUnderstandQueryResponse };
