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
export var UpdateStyleSheetServerList = [
    "https://autopilot.twilio.com",
];
var UpdateStyleSheetPathParams = /** @class */ (function (_super) {
    __extends(UpdateStyleSheetPathParams, _super);
    function UpdateStyleSheetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateStyleSheetPathParams.prototype, "assistantSid", void 0);
    return UpdateStyleSheetPathParams;
}(SpeakeasyBase));
export { UpdateStyleSheetPathParams };
var UpdateStyleSheetUpdateStyleSheetRequest = /** @class */ (function (_super) {
    __extends(UpdateStyleSheetUpdateStyleSheetRequest, _super);
    function UpdateStyleSheetUpdateStyleSheetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StyleSheet;" }),
        __metadata("design:type", Object)
    ], UpdateStyleSheetUpdateStyleSheetRequest.prototype, "styleSheet", void 0);
    return UpdateStyleSheetUpdateStyleSheetRequest;
}(SpeakeasyBase));
export { UpdateStyleSheetUpdateStyleSheetRequest };
var UpdateStyleSheetSecurity = /** @class */ (function (_super) {
    __extends(UpdateStyleSheetSecurity, _super);
    function UpdateStyleSheetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateStyleSheetSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateStyleSheetSecurity;
}(SpeakeasyBase));
export { UpdateStyleSheetSecurity };
var UpdateStyleSheetRequest = /** @class */ (function (_super) {
    __extends(UpdateStyleSheetRequest, _super);
    function UpdateStyleSheetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateStyleSheetRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateStyleSheetPathParams)
    ], UpdateStyleSheetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateStyleSheetUpdateStyleSheetRequest)
    ], UpdateStyleSheetRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateStyleSheetSecurity)
    ], UpdateStyleSheetRequest.prototype, "security", void 0);
    return UpdateStyleSheetRequest;
}(SpeakeasyBase));
export { UpdateStyleSheetRequest };
var UpdateStyleSheetResponse = /** @class */ (function (_super) {
    __extends(UpdateStyleSheetResponse, _super);
    function UpdateStyleSheetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateStyleSheetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateStyleSheetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1AssistantStyleSheet)
    ], UpdateStyleSheetResponse.prototype, "autopilotV1AssistantStyleSheet", void 0);
    return UpdateStyleSheetResponse;
}(SpeakeasyBase));
export { UpdateStyleSheetResponse };
