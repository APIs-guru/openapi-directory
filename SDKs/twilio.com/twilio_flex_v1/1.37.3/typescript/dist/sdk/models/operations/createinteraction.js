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
export var CreateInteractionServerList = [
    "https://flex-api.twilio.com",
];
var CreateInteractionCreateInteractionRequest = /** @class */ (function (_super) {
    __extends(CreateInteractionCreateInteractionRequest, _super);
    function CreateInteractionCreateInteractionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Channel;" }),
        __metadata("design:type", Object)
    ], CreateInteractionCreateInteractionRequest.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Routing;" }),
        __metadata("design:type", Object)
    ], CreateInteractionCreateInteractionRequest.prototype, "routing", void 0);
    return CreateInteractionCreateInteractionRequest;
}(SpeakeasyBase));
export { CreateInteractionCreateInteractionRequest };
var CreateInteractionSecurity = /** @class */ (function (_super) {
    __extends(CreateInteractionSecurity, _super);
    function CreateInteractionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateInteractionSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateInteractionSecurity;
}(SpeakeasyBase));
export { CreateInteractionSecurity };
var CreateInteractionRequest = /** @class */ (function (_super) {
    __extends(CreateInteractionRequest, _super);
    function CreateInteractionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateInteractionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateInteractionCreateInteractionRequest)
    ], CreateInteractionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInteractionSecurity)
    ], CreateInteractionRequest.prototype, "security", void 0);
    return CreateInteractionRequest;
}(SpeakeasyBase));
export { CreateInteractionRequest };
var CreateInteractionResponse = /** @class */ (function (_super) {
    __extends(CreateInteractionResponse, _super);
    function CreateInteractionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateInteractionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateInteractionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FlexV1Interaction)
    ], CreateInteractionResponse.prototype, "flexV1Interaction", void 0);
    return CreateInteractionResponse;
}(SpeakeasyBase));
export { CreateInteractionResponse };
