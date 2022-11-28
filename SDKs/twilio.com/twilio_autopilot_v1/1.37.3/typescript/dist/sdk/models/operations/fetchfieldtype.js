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
export var FetchFieldTypeServerList = [
    "https://autopilot.twilio.com",
];
var FetchFieldTypePathParams = /** @class */ (function (_super) {
    __extends(FetchFieldTypePathParams, _super);
    function FetchFieldTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], FetchFieldTypePathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchFieldTypePathParams.prototype, "sid", void 0);
    return FetchFieldTypePathParams;
}(SpeakeasyBase));
export { FetchFieldTypePathParams };
var FetchFieldTypeSecurity = /** @class */ (function (_super) {
    __extends(FetchFieldTypeSecurity, _super);
    function FetchFieldTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchFieldTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchFieldTypeSecurity;
}(SpeakeasyBase));
export { FetchFieldTypeSecurity };
var FetchFieldTypeRequest = /** @class */ (function (_super) {
    __extends(FetchFieldTypeRequest, _super);
    function FetchFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchFieldTypeRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchFieldTypePathParams)
    ], FetchFieldTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchFieldTypeSecurity)
    ], FetchFieldTypeRequest.prototype, "security", void 0);
    return FetchFieldTypeRequest;
}(SpeakeasyBase));
export { FetchFieldTypeRequest };
var FetchFieldTypeResponse = /** @class */ (function (_super) {
    __extends(FetchFieldTypeResponse, _super);
    function FetchFieldTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchFieldTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchFieldTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1AssistantFieldType)
    ], FetchFieldTypeResponse.prototype, "autopilotV1AssistantFieldType", void 0);
    return FetchFieldTypeResponse;
}(SpeakeasyBase));
export { FetchFieldTypeResponse };
