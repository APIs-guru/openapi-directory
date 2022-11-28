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
export var CreateSinkTestServerList = [
    "https://events.twilio.com",
];
var CreateSinkTestPathParams = /** @class */ (function (_super) {
    __extends(CreateSinkTestPathParams, _super);
    function CreateSinkTestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], CreateSinkTestPathParams.prototype, "sid", void 0);
    return CreateSinkTestPathParams;
}(SpeakeasyBase));
export { CreateSinkTestPathParams };
var CreateSinkTestSecurity = /** @class */ (function (_super) {
    __extends(CreateSinkTestSecurity, _super);
    function CreateSinkTestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSinkTestSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSinkTestSecurity;
}(SpeakeasyBase));
export { CreateSinkTestSecurity };
var CreateSinkTestRequest = /** @class */ (function (_super) {
    __extends(CreateSinkTestRequest, _super);
    function CreateSinkTestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSinkTestRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSinkTestPathParams)
    ], CreateSinkTestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSinkTestSecurity)
    ], CreateSinkTestRequest.prototype, "security", void 0);
    return CreateSinkTestRequest;
}(SpeakeasyBase));
export { CreateSinkTestRequest };
var CreateSinkTestResponse = /** @class */ (function (_super) {
    __extends(CreateSinkTestResponse, _super);
    function CreateSinkTestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSinkTestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSinkTestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventsV1SinkSinkTest)
    ], CreateSinkTestResponse.prototype, "eventsV1SinkSinkTest", void 0);
    return CreateSinkTestResponse;
}(SpeakeasyBase));
export { CreateSinkTestResponse };
