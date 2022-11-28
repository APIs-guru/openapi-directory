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
export var CreateSinkServerList = [
    "https://events.twilio.com",
];
var CreateSinkCreateSinkRequest = /** @class */ (function (_super) {
    __extends(CreateSinkCreateSinkRequest, _super);
    function CreateSinkCreateSinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Description;" }),
        __metadata("design:type", String)
    ], CreateSinkCreateSinkRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SinkConfiguration;" }),
        __metadata("design:type", Object)
    ], CreateSinkCreateSinkRequest.prototype, "sinkConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SinkType;" }),
        __metadata("design:type", String)
    ], CreateSinkCreateSinkRequest.prototype, "sinkType", void 0);
    return CreateSinkCreateSinkRequest;
}(SpeakeasyBase));
export { CreateSinkCreateSinkRequest };
var CreateSinkSecurity = /** @class */ (function (_super) {
    __extends(CreateSinkSecurity, _super);
    function CreateSinkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSinkSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSinkSecurity;
}(SpeakeasyBase));
export { CreateSinkSecurity };
var CreateSinkRequest = /** @class */ (function (_super) {
    __extends(CreateSinkRequest, _super);
    function CreateSinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSinkRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSinkCreateSinkRequest)
    ], CreateSinkRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSinkSecurity)
    ], CreateSinkRequest.prototype, "security", void 0);
    return CreateSinkRequest;
}(SpeakeasyBase));
export { CreateSinkRequest };
var CreateSinkResponse = /** @class */ (function (_super) {
    __extends(CreateSinkResponse, _super);
    function CreateSinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSinkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSinkResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventsV1Sink)
    ], CreateSinkResponse.prototype, "eventsV1Sink", void 0);
    return CreateSinkResponse;
}(SpeakeasyBase));
export { CreateSinkResponse };
