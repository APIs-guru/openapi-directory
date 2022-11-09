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
export var FETCHSTYLESHEET_SERVERS = [
    "https://autopilot.twilio.com",
];
var FetchStyleSheetPathParams = /** @class */ (function (_super) {
    __extends(FetchStyleSheetPathParams, _super);
    function FetchStyleSheetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], FetchStyleSheetPathParams.prototype, "assistantSid", void 0);
    return FetchStyleSheetPathParams;
}(SpeakeasyBase));
export { FetchStyleSheetPathParams };
var FetchStyleSheetSecurity = /** @class */ (function (_super) {
    __extends(FetchStyleSheetSecurity, _super);
    function FetchStyleSheetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchStyleSheetSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchStyleSheetSecurity;
}(SpeakeasyBase));
export { FetchStyleSheetSecurity };
var FetchStyleSheetRequest = /** @class */ (function (_super) {
    __extends(FetchStyleSheetRequest, _super);
    function FetchStyleSheetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchStyleSheetRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchStyleSheetPathParams)
    ], FetchStyleSheetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchStyleSheetSecurity)
    ], FetchStyleSheetRequest.prototype, "security", void 0);
    return FetchStyleSheetRequest;
}(SpeakeasyBase));
export { FetchStyleSheetRequest };
var FetchStyleSheetResponse = /** @class */ (function (_super) {
    __extends(FetchStyleSheetResponse, _super);
    function FetchStyleSheetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchStyleSheetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchStyleSheetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AutopilotV1AssistantStyleSheet)
    ], FetchStyleSheetResponse.prototype, "autopilotV1AssistantStyleSheet", void 0);
    return FetchStyleSheetResponse;
}(SpeakeasyBase));
export { FetchStyleSheetResponse };
